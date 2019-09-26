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

export function getDisplay(value){
    switch(value){
        case 'B':
            return "💣";
        case 'F':
            return "🏳️";
        case 1:
            return "😇";
        case 2:
            return "🤡";
        case 3:
            return "🤠";
        case 4:
            return "🤑";
        case 5:
            return "😂";
        case 6:
            return "😭";
        case 7:
            return "🤮";
        case 8:
            return "😤";
        case 9:
            return "🤬";
        case 10:
            return "😈";
        case null:
            return "🌳";
        case 'X':
            return "🌊";
        default:
            return value;
    }
}

/**
 * Returns a warning if the move is not valid
 */
export function isValidMove(current_index, target_index, current_piece, game) {
    //check piece to get number of steps
    let warning = null;
    if (current_piece === 'B') {
        warning = "Cannot move a bomb.";
    } else if (current_piece === 'F') {
        warning = "Cannot move the flag.";
    } else if (game[target_index] === 'X') {
        warning = "Cannot move a piece into the water.";
    } else if (current_piece === 2) { /* FIXME change if scout hits water */
        let temp = [];
        isBottomValidScout(current_index, game, temp, 'C');
        isLeftValidScout(current_index, game, temp, 'C');
        isRightValidScout(current_index, game, temp, 'C');
        isTopValidScout(current_index, game, temp, 'C');

        if (temp.indexOf(target_index) < 0) {
            warning = "Can only move the scout in a straight line in up, down, left, or right direction."
        }
    } else {
        console.log('target: ' + target_index + ' curr: ' + current_index);
        let diff = Math.abs(target_index - current_index);
        //if moving right --> diff = 1
        //if moving left --> diff = -1
        //if moving up --> diff = -10
        //if moving down --> diff = 10

        if ((diff !== 1) && (diff !== 10)) {
            warning = "Can only move one space in up, down, left, or right direction."
        }
    }
    return warning;
}

/**
 * Index i - piece attacking
 * Index j - piece defending
 */
export function comparePieceValues(squares, i, j) {
    let attacker = squares[i];
    let defender = squares[j];

    if (defender === 'B') {
        return (attacker === 3) ? i : j;  // only miner could defuse a bomb
    }
    if (defender === 'F') {
        return i;
    }
    if ((attacker === 1) && (defender === 10)) {
        return i; //spy attacking marshall
    }

    if (defender === attacker) {
        return -1;
    }

    return (attacker > defender) ? i : j;
    // special rules not implemented yet
}

export function getMoveablePieces(game, squares, enemy) {
    /**
     * game array marks player positions as 'P'
     * and computer positions as 'C'
     * the cells are from cell 0 to cell 99 
     */
    var team = (enemy === 'P') ? 'C' : 'P';
    const map = [];

    //first find enemy positions
    //for each of those positions, check if the piece can go left, right, up, or down
    //implement piece checking later

    //later implement passing in 'C' or 'P' to allow for player speed playing
    let computer_squares = [];
    let i;
    for (i = 0; i < 100; i++) {
        if (game[i] === team) {
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
        } else if (piece === 2) {
            // scout can move any distance in a straight line
            isBottomValidScout(index, game, temp, enemy);
            isLeftValidScout(index, game, temp, enemy);
            isRightValidScout(index, game, temp, enemy);
            isTopValidScout(index, game, temp, enemy);
        } else {
            if (isBottomValid(index, game, team)) {
                temp.push(index + 10);
            } // move bottom to the top so ai could be more aggressive

            if (isLeftValid(index, game, team)) {
                temp.push(index - 1);
            }
            if (isRightValid(index, game, team)) {
                temp.push(index + 1);
            }
            if (isTopValid(index, game, team)) {
                temp.push(index - 10);
            }
        }
        if (temp.length) {
            map.push([index, temp])
        }
    }

    return map;
}

function isLeftValidScout(index, game, temp, enemy) {
    for (let i = index; i % 10; i--) { // go from current index - check if left index is clear 

        let left = (i - 1);
        if (!game[left]) {
            // if left is clear - put in temp
            temp.push(left);
            continue;
        } else if (game[left] === enemy) {
            // left has a player - put in temp
            temp.push(left);
        }
        return temp;
    }
    return temp;
}

function isLeftValid(i, game, team) {
    if (!(i % 10)) {
        return false;  //current piece is on the left boundary
    }
    let left = i - 1;
    return (game[left] === team || game[left] === 'X') ? false : true;
}

function isRightValidScout(index, game, temp, enemy) {
    for (let i = index; ((i + 1) % 10); i++) {

        let right = (i + 1);
        if (!game[right]) {
            temp.push(right);
            continue;
        } else if (game[right] === enemy) {
            temp.push(right);
        }
        return temp;
    }
    return temp;
}

function isRightValid(i, game, team) {
    if (!((i + 1) % 10)) {
        return false; // current piece is on the right boundary
    }
    let right = i + 1;
    return (game[right] === team || game[right] === 'X') ? false : true;
}

function isTopValidScout(index, game, temp, enemy) {
    for (let i = index; i >= 10; i -= 10) {

        let top = (i - 10);
        if (!game[top]) {
            temp.push(top);
            continue;
        } else if (game[top] === enemy) {
            temp.push(top);
        }
        return temp;
    }
    return temp;
}

function isTopValid(i, game, team) {
    if (i < 10) {
        return false; // current piece is on the top boundary
    }
    let top = i - 10;
    return (game[top] === team || game[top] === 'X') ? false : true;
}

function isBottomValidScout(index, game, temp, enemy) {
    for (let i = index; i < 90; i += 10) {

        let bottom = (i + 10);
        if (!game[bottom]) {
            temp.push(bottom);
            continue;
        } else if (game[bottom] === enemy) {
            temp.push(bottom);
        }
        return temp;
    }
    return temp;
}

function isBottomValid(i, game, team) {
    if (i >= 90) {
        return false // current piece is on the bottom boundary
    }
    let bottom = i + 10;
    return (game[bottom] === team || game[bottom] === 'X') ? false : true;
}