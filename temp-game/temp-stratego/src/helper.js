/**
* B (Bomb) - defeats any attacking piece except Miner (3)
* 10 (Marshal) - can be captured by the spy
* 9 (General) 
* 8 (Colonel)
* 7 (Major)
* 6 (Captain)
* 5 (Lieutenant)
* 4 (Sergeant)
* 3 (Miner) - can defuse bombs
* 2 (Scout) - can move any distance in a straight line
* 1 (Spy) - can defeat the marshal - only if spy attacks first
* F (Flag) - if captured, game ends
*/



/**
* Helper to check if the sum of the piece counts === 0
*/
export function checkSetup(piece_count) {
    return (piece_count.reduce((x, y) => x + y) === 0);
}

/**
 * TO BE IMPLEMENTED
 */
export function isValidMove(current_index, target_index, current_piece, game) {
    //check piece to get number of steps
    return true;
}

/**
 * Index i - piece attacking
 * Index j - piece defending
 * 
 * TO BE IMPLEMENTED - change comments to include params
 */
export function comparePieceValues(squares, i, j) {
    let attacker = squares[i];
    let defender = squares[j];

    if(defender === 'B'){
        return j;
    }
    if(defender === 'F'){
        return i;
    }

    if(defender === attacker){
        return -1;
    }

    return (attacker > defender) ? i : j;
    // special rules not implemented yet
}

export function getMoveablePieces(game, squares) {
    /**
     * game array marks player positions as 'P'
     * and computer positions as 'C'
     * the cells are from cell 0 to cell 99 
     */

    const map = [];

    //first find enemy positions
    //for each of those positions, check if the piece can go left, right, up, or down
    //implement piece checking later

    //later implement passing in 'C' or 'P' to allow for player speed playing
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
        let piece = squares[index];
        if (piece === 'B') {
            continue; // bombs cannot move
        } else if (piece === 'F') {
            continue; // the flag cannot move
        }
        // have check for more than 1 square move later on
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
    if (!((i + 1) % 10)) {
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