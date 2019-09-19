export function checkSetup(piece_count) {
    /**
     * See if the sum of the piece counts === 0
     */
    return (piece_count.reduce((x, y) => x + y) === 0);
}

export function isValidMove(current_index, target_index, current_piece, game) {
    //check piece to get number of steps
    return true;
}

export function getMoveablePieces(game) {
    // for now this function just adds the empty spots as the possible places the pieces can go
    // also all the enemy pieces can move at this point of implementation

    /**
     * game array marks player positions as 'P'
     * and computer positions as 'C'
     * the cells are from cell 0 to cell 99 
     */

    const map = [];

    //first find enemy positions
    //for each of those positions, check if the piece can go left, right, up, or down
    //implement piece checking later
    let computer_squares = [];
    let i;
    for (i = 0; i < 100; i++) {
        if (game[i] === 'C') {
            computer_squares.push(i);
        }
    }
    for (i = 0; i < computer_squares.length; i++) {
        let temp = [];
        let index = computer_squares[i];
        if (isLeftValid(index, game)) {
            temp.push(index - 1);
        }
        if (isRightValid(index, game)) {
            temp.push(index + 1);
        }
        if (isTopValid(index, game)) {
            temp.push(index - 10);
        }
        if (isBottomValid(index, game)) {
            temp.push(index + 10);
        }
        if (temp.length) {
            map.push([index, temp])
        }
    }

    return map;
}

function isLeftValid(i, game) {
    if (!(i % 10)) {
        return false;  //current piece is on the left boundary
    }
    let left = i - 1;
    return game[left] === 'C' ? false : true;
}

function isRightValid(i, game) {
    if ((i + 1) % 10) {
        return false; // current piece is on the right boundary
    }
    let right = i + 1;
    return game[right] === 'C' ? false : true;
}

function isTopValid(i, game) {
    if (i < 10) {
        return false; // current piece is on the top boundary
    }
    let top = i - 10;
    return game[top] === 'C' ? false : true;
}

function isBottomValid(i, game) {
    if (i >= 90) {
        return false // current piece is on the bottom boundary
    }
    let bottom = i + 10;
    return game[bottom] === 'C' ? false : true;
}