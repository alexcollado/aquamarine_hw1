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

    const map = [];
    let empty_spots = [];
    let computer_locations = [];
    for (var i = 0; i < 100; i++) {
        if (!game[i]) {
            empty_spots.push(i);
        } else if (game[i] === 'C') {
            computer_locations.push(i);
        }
    }
    for (var j = 0; j < computer_locations.length; j++) {
        map.push([computer_locations[j], empty_spots]);
    }

    return map;
}