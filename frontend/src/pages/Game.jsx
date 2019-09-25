import * as helper from '../helper.js';
import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from '../styles/Game.module.css';

function Square(props) {
    return (
        <button className={styles.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function OccupiedSquare(props) {
    if (props.owner === 'P') {
        if (props.isVisible) { //add white border
            return (
                <div className={styles.square}>
                    <HeadShake>
                        <Button className={`${styles['player-piece']} mx-auto my-auto ${styles['visible-border']}`} 
                        onClick={props.onClick}>
                            {props.value}
                        </Button>
                    </HeadShake>
                </div>
            );
        } else {
            return (
                <div className={styles.square}>
                    <HeadShake>
                        <Button className={`${styles['player-piece']} mx-auto my-auto`} 
                        onClick={props.onClick}>
                            {props.value}
                        </Button>
                    </HeadShake>
                </div>
            );
        }
    } else {
        if (props.isVisible) { //add value of square
            return (
                <div className={styles.square}>
                    <HeadShake>
                        <Button className={`${styles['computer-piece']} mx-auto my-auto`} onClick={props.onClick}>
                            {props.value}
                        </Button>
                    </HeadShake>
                </div>
            );
        } else {
            return (
                <div className={styles.square}>
                    <HeadShake>
                        <Button className={`${styles['computer-piece']} mx-auto my-auto`} onClick={props.onClick}>
                        </Button>
                    </HeadShake>
                </div>
            );
        }
    }
}

function Piece(props) {
    if (props.owner === 'P') {
        if (props.isDisabled) {
            return (
                <div>
                    <Button className={`${styles['player-piece']}`}>
                        {props.value}
                    </Button>
                    <div className={`${styles['text-center']} ${styles['piece-count']}`}>
                        {'x' + props.count}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Button className={`${styles['player-piece']}`} onClick={props.onClick}>
                        {props.value}
                    </Button>
                    <div className={`${styles['text-center']} ${styles['piece-count']}`}>
                        {'x' + props.count}
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div>
                <Button className={`${styles['computer-piece']}`}>
                    {props.value}
                </Button>
                <div className={`${styles['text-center']} ${styles['piece-count']}`}>
                    {'x' + props.count}
                </div>
            </div>
        );
    }
}

class PieceTable extends React.Component {
    renderPiece(i) {
        return (
            <Piece
                value={this.props.pieces[i]}
                count={this.props.piece_count[i]}
                onClick={() => this.props.onClick(i)}
                owner={this.props.owner}
                isDisabled={this.props.isDisabled}
            />
        );
    }

    render() {
        return (
            <Row className={`${styles['piece-row']} justify-content-md-center`}>
                {this.renderPiece(0)}
                {this.renderPiece(1)}
                {this.renderPiece(2)}
                {this.renderPiece(3)}
                {this.renderPiece(4)}
                {this.renderPiece(5)}
                {this.renderPiece(6)}
                {this.renderPiece(7)}
                {this.renderPiece(8)}
                {this.renderPiece(9)}
                {this.renderPiece(10)}
                {this.renderPiece(11)}
            </Row>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        if (this.props.game[i] === 'P') {
            if (this.props.isDisabled) { // if game is disabled prevent user from clicking
                return (
                    <OccupiedSquare
                        value={this.props.squares[i]}
                        owner={this.props.game[i]}
                        isVisible={this.props.visibility_arr[i]} //pass in visibility info
                    />
                );
            } else {
                return (
                    <OccupiedSquare
                        value={this.props.squares[i]}
                        owner={this.props.game[i]}
                        onClick={() => this.props.onPlayerMove(i)} //update handle method
                        isVisible={this.props.visibility_arr[i]} //pass in visibility info
                    />
                );
            }
        } else if (this.props.game[i] === 'C') {
            return (
                <OccupiedSquare
                    value={this.props.squares[i]}
                    owner={this.props.game[i]}
                    onClick={() => this.props.onPlayerAttack(i)} //squares with the computer on it -- handle player attacking it
                    isVisible={this.props.visibility_arr[i]}
                />
            );
        }
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <Container>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(80)}
                    {this.renderSquare(81)}
                    {this.renderSquare(82)}
                    {this.renderSquare(83)}
                    {this.renderSquare(84)}
                    {this.renderSquare(85)}
                    {this.renderSquare(86)}
                    {this.renderSquare(87)}
                    {this.renderSquare(88)}
                    {this.renderSquare(89)}
                </Row>
                <Row className={`${styles['board-row']} justify-content-md-center`}>
                    {this.renderSquare(90)}
                    {this.renderSquare(91)}
                    {this.renderSquare(92)}
                    {this.renderSquare(93)}
                    {this.renderSquare(94)}
                    {this.renderSquare(95)}
                    {this.renderSquare(96)}
                    {this.renderSquare(97)}
                    {this.renderSquare(98)}
                    {this.renderSquare(99)}
                </Row>
            </Container>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.setupBtnRef = React.createRef();
        this.state = {
            squares: Array(100).fill(null), //contains the values needed to display board
            game: Array(100).fill(null), // used to differentiate player from computer pieces
            visibility_arr: Array(100).fill(false), // used to check if piece is visible or not
            updated_log: [].map((text, id) => ({ id, text })),
            pieces: ['F', 'B', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            player_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            computer_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            playerIsNext: true,
            gameStart: false,
            gameOver: false,
            setupCompleted: false,
            fastForward: false,
            current_piece: null,
            current_index: null,
            warning: null,
            interval_id: null,
        };
        this.state.id = this.state.updated_log.length;
    }

    addToLog(log_item) {
        this.setState({
            updated_log: [
                { id: this.state.id, text: log_item },
                ...this.state.updated_log
            ],
            id: this.state.id + 1,
        });
    }

    /**
     * This handler is called when a player selects on an empty square on the board.
     * This same handler is use for piece setup and piece movement.
     */
    handleClick(i) {
        if (this.state.gameStart) {
            /**
             * Game has started. Clicking on an empty square means moving the intended player
             * piece to that square.
             */
            if (!this.state.current_piece) {
                return; // no player piece is selected yet
            }

            if (!this.state.playerIsNext) {
                return; // it is currently the computer's turn
            }

            /**
             * If the empty square is valid compared to the current index of the selected piece,
             * move that piece to that square.
             */
            let warning = helper.isValidMove(this.state.current_index, i, this.state.current_piece, this.state.game);
            if (!warning) {

                const game = this.state.game.slice();
                const squares = this.state.squares.slice();
                const visibility_arr = this.state.visibility_arr.slice();

                game[i] = 'P';
                game[this.state.current_index] = null;

                visibility_arr[i] = visibility_arr[this.state.current_index];
                visibility_arr[this.state.current_index] = false;

                squares[i] = this.state.current_piece;
                squares[this.state.current_index] = null;

                this.addToLog('Player moved [' + this.state.current_piece + '] from cell ' + this.state.current_index + ' to cell ' + i);
                this.setState({
                    squares: squares,
                    game: game,
                    warning: null,
                    current_piece: null,
                    visibility_arr: visibility_arr,
                    playerIsNext: !(this.state.playerIsNext),
                });

                setTimeout(function () { this.handleComputerMove('P'); }.bind(this), 2000);
            }
            this.setState({
                warning: warning,
            })
            return;
        } else {
            /**
             * Game has not started yet. At this point the player places 
             * the pieces on the board.
             */
            if (this.state.setupCompleted) {
                return; // don't do anything if setup already
            }

            const squares = this.state.squares.slice();
            if (squares[i]) {
                this.setState({
                    warning: 'Current space is occupied already!',
                })
                return; // Selected square is occupied by another piece
            }

            if (!(this.state.current_piece)) {
                return; // No piece is selected yet
            }

            let j = this.state.pieces.indexOf(this.state.current_piece);
            const piece_count = this.state.player_piece_count.slice();
            if (piece_count[j] <= 0) {
                this.setState({
                    warning: 'None remaining for the chosen piece.', // Exhausted piece count
                })
                return;
            }

            if (i <= 59) {
                this.setState({
                    warning: 'Cannot set up outside of limitation!',
                })
                return; // Must place own pieces at the closest 4 rows
            }

            const game = this.state.game.slice();
            game[i] = 'P'; // During setup, all of the pieces are placed by the player
            // No need to update visibility array yet, since its initialized to false for every piece

            squares[i] = this.state.current_piece;
            piece_count[j] = (piece_count[j] - 1);

            this.setState({
                squares: squares,
                player_piece_count: piece_count,
                game: game,
                warning: null,
            });

            if (helper.checkSetup(piece_count)) {
                this.addToLog('Player setup completed')

                this.setState({
                    setupCompleted: true,
                    current_piece: null,
                })

                this.addToLog('Player setup completed');
            }
        }
    }

    /** 
     * This handler is called when a player selects on a square with a computer piece on it. 
     * If a player piece is currently selected, attack the computer piece on the selected square.
    */
    handleComputerPieceOnBoardClick(i) {
        if (!this.state.current_piece) {
            return; // no player piece is selected yet
        }

        if (!this.state.playerIsNext) {
            return; // it is currently the computer's turn
        }

        let warning = helper.isValidMove(this.state.current_index, i, this.state.current_piece, this.state.game);
        if (!warning) {
            this.handleAttack(this.state.current_index, i, 'C');

            this.setState({
                warning: null,
                current_piece: null,
                playerIsNext: !(this.state.playerIsNext),
            })

            setTimeout(function () { this.handleComputerMove('P'); }.bind(this), 2000);
        }
        this.setState({
            warning: warning,
        })
    }

    /** 
     * This helper is called when an attacker attacks a square with a piece on it
     * 
     * This method works during manual play - how to modify for auto play?
    */
    handleAttack(attack_index, defend_index, enemy) { /* maybe modify so that its enemy ? */
        const squares = this.state.squares.slice();
        const game = this.state.game.slice();
        const visibility_arr = this.state.visibility_arr.slice();

        let winner = helper.comparePieceValues(squares, attack_index, defend_index);
        let attacking_piece;
        let defending_piece;
        let team = (enemy === 'P') ? 'C' : 'P';
        if (this.state.current_piece) {
            attacking_piece = this.state.current_piece;
            defending_piece = squares[defend_index];
        } else {
            attacking_piece = squares[attack_index];
            defending_piece = squares[defend_index];
        }

        game[attack_index] = null;
        squares[attack_index] = null;

        if (winner < 0) {
            this.addToLog('Both pieces [' + defending_piece + '] from cell ' + defend_index + ' removed from the board')
            visibility_arr[defend_index] = false;
            game[defend_index] = null;
            squares[defend_index] = null;
            this.handleDecrementPieceCount(attacking_piece, enemy);
            this.handleDecrementPieceCount(defending_piece, team);
        } else {
            visibility_arr[defend_index] = true; // attacker or defender is revealed
            visibility_arr[attack_index] = false; // attacker piece is now empty 

            if (winner === defend_index) {
                //defender won
                if (team === 'P') {
                    this.addToLog('Computer defended cell ' + defend_index + ' with [' +
                        defending_piece + '] and captured the Player\'s [' + attacking_piece + ']'
                    );
                    this.handleDecrementPieceCount(attacking_piece, 'P');
                } else {
                    this.addToLog('Player defended cell ' + defend_index + ' with [' +
                        defending_piece + '] and captured the Computer\'s [' + attacking_piece + ']'
                    );
                    this.handleDecrementPieceCount(attacking_piece, 'C');
                }
            } else {
                //attacker won
                if (team === 'P') {
                    this.addToLog('Player attacked cell ' + defend_index + ' with [' +
                        attacking_piece + '] and captured the Computer\'s [' + defending_piece + ']'
                    );
                    game[defend_index] = 'P';
                    this.handleDecrementPieceCount(defending_piece, 'C');
                } else {
                    this.addToLog('Computer attacked cell ' + defend_index + ' with [' +
                        attacking_piece + '] and captured the Player\'s [' + defending_piece + ']'
                    );
                    game[defend_index] = 'C';
                    this.handleDecrementPieceCount(defending_piece, 'P');
                }
                squares[defend_index] = attacking_piece;
            }
        }
        this.setState({
            squares: squares,
            game: game,
            visibility_arr: visibility_arr,
        });
    }

    /** 
     * This handler is called when a player selects on a square with a player piece on it. 
     * Saves the current piece type and index of the player piece in the game state.
     * Essentially, "picking up" the player piece to decide what to do next.
    */
    handlePlayerPieceOnBoardClick(i) {
        this.setState({
            current_piece: this.state.squares[i],
            current_index: i,
        });
    }

    /**
     * Helper method that calculates and moves the computer piece
     */
    async handleComputerMove(enemy) {
        var team = (enemy === 'P') ? 'C' : 'P';

        if (this.state.gameOver) {
            return;
        }
        const game = this.state.game.slice();
        const squares = this.state.squares.slice();
        const visibility_arr = this.state.visibility_arr.slice();

        const map = helper.getMoveablePieces(game, squares, enemy);
        if (map.length == 0) {
            setTimeout(function () { 
                let status = 'Game Over - ' + (!this.state.playerIsNext ? 'Player' : 'Computer') + 'ran out of possible moves.'; // there might be an error here
                this.addToLog(status);
                this.handleGameOver();
            }.bind(this), 1000);
            this.handleGameOver();
        }

        /**
         * map returns an array of arrays
         * map[i][0] is the current index of the computer piece
         * map[i][1] is an array of possible indices that the piece could go to
         */

        var i = Math.floor(Math.random() * map.length) // randomly select a computer piece
        var possible_squares = map[i][1];

        var temp = (enemy === 'P') ? 0 : (possible_squares.length - 1)
        var k = Math.floor(Math.random() * 2);
        var j = k ? temp : (Math.floor(Math.random() * possible_squares.length));
        // either go down (aggressive) or select a random move wrt to the piece

        var current_index = map[i][0];
        var current_piece = squares[current_index];
        var target_index = possible_squares[j];

        if (game[target_index] === enemy) {
            //fix with decrement too...
            this.handleAttack(current_index, target_index, enemy);
        } else {
            game[target_index] = team;
            game[current_index] = null;

            visibility_arr[target_index] = visibility_arr[current_index];
            visibility_arr[current_index] = false;

            squares[target_index] = current_piece;
            squares[current_index] = null;

            var piece = (visibility_arr[target_index]) ? current_piece : '?';
            var user = (enemy === 'P') ? 'Computer' : 'Player';

            this.addToLog(user + ' moved [' + piece + '] from cell ' + current_index + ' to cell ' + target_index);
            this.setState({
                squares: squares,
                game: game,
                visibility_arr: visibility_arr,
            });
        }
        this.setState({
            warning: null,
            current_piece: null,
            playerIsNext: !(this.state.playerIsNext),
        });
    }

    /**
     * Helper method that resets the player and computer pieces to their initial values.
     */
    resetPieceCounts() {
        this.setState({
            player_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            computer_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
        });
    }

    /**
     * Helper method that decrements the number of pieces in a specific set
     */
    handleDecrementPieceCount(piece, piece_count_to_decrement) {

        let i = this.state.pieces.indexOf(piece);
        const piece_count = (piece_count_to_decrement === 'P') ? this.state.player_piece_count.slice() : this.state.computer_piece_count.slice();

        piece_count[i] = piece_count[i] - 1;

        if (piece_count_to_decrement === 'P') {
            this.setState({
                player_piece_count: piece_count,
            });
        } else {
            this.setState({
                computer_piece_count: piece_count,
            });
        }

        if (!i) {
            setTimeout(function () { 
                let status = 'Game Over - ' + (piece_count_to_decrement === 'P' ? 'Computer' : 'Player') + ' won!';
                this.addToLog(status);
                this.handleGameOver();
            }.bind(this), 1000);
        }
    }

    /**
     * End game
     */
    handleGameOver() {
        clearInterval(this.state.interval_id);
        this.setState({
            gameOver: true,
        });
    }

    /**
     * Handler called when the user quits
     */
    handleQuit() {
        let status = 'Game over - Computer won! (Player quit)';
        this.addToLog(status);
        this.handleGameOver();
    }

    /**
     * Handler that modifies user play from manual to automatic or vice versa
     */
    handleToggleAuto() {
        let temp = this.state.interval_id; /* fix me check if player or computer goes first */
        let status = (!this.state.fastForward ? 'Enabling' : 'Disabling') + ' auto play';
        if (!this.state.fastForward) {
            temp = setInterval(function () {
                this.handleComputerMove('P');
                setTimeout(function () { this.handleComputerMove('C'); }.bind(this), 2000);
            }.bind(this), 4000);
        } else {
            clearInterval(temp);
            // check if ended during computer's turn or player's turn 
        }

        this.addToLog(status);

        this.setState({
            fastForward: !this.state.fastForward,
            interval_id: temp,
        });
    }

    /**
     * This handler is called when a player selects a certain piece on their "piece table"
     * during the setup portion of the game.
     */
    handlePlayerPieceClick(i) {
        this.setState({
            current_piece: this.state.pieces[i],
        });
    }

    /**
     * Randomly place the remaining pieces on the board.
     * 
     * @param playerIsNext - boolean value if the player is being setup or not
     * If false, the computer pieces are setup on the table
     */
    handleCompleteSetup(playerIsNext) {
        const squares = this.state.squares.slice();
        const game = this.state.game.slice();
        const pieces = this.state.pieces.slice();

        const piece_count = playerIsNext ? this.state.player_piece_count.slice() : this.state.computer_piece_count.slice();

        let left;
        let right;
        if (playerIsNext) {
            right = 99;
            left = 60;
        } else {
            right = 39;
            left = 0;
        }

        /**
         * FIX ME: remove visibility_arr modification later
         */
        const visibility_arr = this.state.visibility_arr.slice();

        for (var i = 0; i < piece_count.length; i++) {
            while (piece_count[i] > 0) {
                var piece = pieces[i];

                var possible_squares = []
                for (var j = right; j >= left; j--) {
                    if (!squares[j]) {
                        possible_squares.push(j);
                    }
                }

                var k = Math.floor(Math.random() * possible_squares.length);
                var index = possible_squares[k];

                squares[index] = piece;
                game[index] = playerIsNext ? 'P' : 'C';

                /**
                 * FIXME delete visibility to true later 
                 */
                visibility_arr[index] = true;

                piece_count[i] = piece_count[i] - 1;
            }
        }

        this.setState({
            squares: squares,
            game: game,
            visibility_arr: visibility_arr, //delete later
            warning: null,
        })

        if (playerIsNext) {
            this.addToLog('Player setup completed')
            this.setState({
                player_piece_count: piece_count,
                setupCompleted: true,
                current_piece: null,
            })
            this.addToLog('Player setup completed');
        } else {
            this.addToLog('Computer setup completed')
            this.setState({
                computer_piece_count: piece_count,
                gameStart: true,
                current_piece: null,
            })
            this.resetPieceCounts();
        }
    }

    render() {
        let status;
        let current_piece;
        status = 'Next turn: ' + (this.state.playerIsNext ? 'Player' : 'Computer');
        if (this.state.gameOver) {
            status = 'Game Over!'
        }

        if (this.state.current_piece) {
            current_piece = 'Current Piece: ' + this.state.current_piece;
        } else {
            current_piece = 'No piece selected'
        }

        let warning = this.state.warning;

        return (
            <div>
                <Container className={styles.game} fluid={true}>
                    <Row>
                        <Col md={2} className="mx-auto justify-content-md-center">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Button id="SetupBtn" className="btn-dark my-2" 
                                    onClick={() => this.handleCompleteSetup(true)} 
                                    disabled={this.state.setupCompleted}>
                                        {"Fill in remaining pieces"}
                                    </Button>
                                    <Button className="btn-dark my-2" 
                                    onClick={() => this.handleCompleteSetup(false)} 
                                    disabled={!this.state.setupCompleted || this.state.gameStart}>
                                        {"Start game"}
                                    </Button>
                                    <Button className="btn-dark my-2" 
                                    onClick={() => this.handleQuit()} 
                                    disabled={!this.state.gameStart || this.state.gameOver}>
                                        {"Quit game"}
                                    </Button>
                                    <ButtonGroup>
                                        <Button className="btn-dark mx-1" 
                                        disabled={!this.state.fastForward || this.state.gameOver} 
                                        onClick={() => this.handleToggleAuto()}>
                                            {"Manual"}
                                        </Button>
                                        <Button className="btn-dark mx-1" 
                                        disabled={this.state.fastForward || !this.state.gameStart || this.state.gameOver} 
                                        onClick={() => this.handleToggleAuto()}>
                                            {"Auto"}
                                        </Button>
                                    </ButtonGroup>
                                </Row>
                            </Container>
                            <Container className={`${styles['game-info']} my-2`}>
                                <Row className="justify-content-md-center">
                                    <Card className="my-2">
                                        <Card.Body>{status}</Card.Body>
                                        <Card.Body>{current_piece}</Card.Body>
                                    </Card>
                                </Row>
                                <Row className="justify-content-md-center text-danger">
                                    <div>{warning}</div>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={8} className="mx-auto justify-content-md-center">
                            <Container className={`${styles['computer-pieces']}`}>
                                <PieceTable
                                    pieces={this.state.pieces}
                                    piece_count={this.state.computer_piece_count}
                                    owner={'C'}
                                    onClick={(i) => this.handlePlayerPieceClick(i)}
                                    isDisabled={true}
                                />
                            </Container>
                            <Board
                                squares={this.state.squares}
                                game={this.state.game}
                                visibility_arr={this.state.visibility_arr}
                                onClick={(i) => this.handleClick(i)}
                                onPlayerMove={(i) => this.handlePlayerPieceOnBoardClick(i)}
                                onPlayerAttack={(i) => this.handleComputerPieceOnBoardClick(i)}
                                isDisabled={this.state.gameOver || this.state.fastForward}
                            />
                            <Container className={`${styles['player-pieces']}`}>
                                <PieceTable
                                    pieces={this.state.pieces}
                                    piece_count={this.state.player_piece_count}
                                    owner={'P'}
                                    onClick={(i) => this.handlePlayerPieceClick(i)}
                                    isDisabled={this.state.setupCompleted}
                                />
                            </Container>
                        </Col>
                        <Col md={2}>
                            <TransitionGroup>
                                {this.state.updated_log.map((item) =>
                                    <Fade key={item.id} collapse left exit={true} appear={true} enter={true}>
                                        <div className="card">
                                            <div className="card-body justify-content-between">
                                                {item.text}
                                            </div>
                                        </div>
                                    </Fade>
                                )}
                            </TransitionGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Game;

// ========================================

// ReactDOM.render(
    // { <Game />, }
    // document.getElementById('root')
// );