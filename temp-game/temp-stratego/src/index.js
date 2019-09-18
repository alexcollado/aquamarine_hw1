import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function OccupiedSquare(props) {
    /**
     * If visible computer -- show numbers
     */
    if (props.owner === 'P') {
        if (props.isVisible) { //add white border
            return (
                <div className="square">
                    <Button className="player-piece mx-auto my-auto visible-border" onClick={props.onClick}>
                        {props.value}
                    </Button>
                </div>
            );
        } else {
            return (
                <div className="square">
                    <Button className="player-piece mx-auto my-auto" onClick={props.onClick}>
                        {props.value}
                    </Button>
                </div>
            );
        }
    } else {
        if (props.isVisible) { //add value of square
            return (
                <div className="square">
                    <Button className="computer-piece mx-auto my-auto" onClick={props.onClick}>
                        {props.value}
                    </Button>
                </div>
            );
        } else {
            return (
                <div className="square">
                    <Button className="computer-piece mx-auto my-auto" onClick={props.onClick}>
                    </Button>
                </div>
            );
        }
    }
}

function Piece(props) {
    if (props.owner === 'P') {
        return (
            <div>
                <Button className="player-piece" onClick={props.onClick}>
                    {props.value}
                </Button>
                <div className="text-center piece-count">
                    {'x' + props.count}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Button className="computer-piece" onClick={props.onClick} disabled>
                    {props.value}
                </Button>
                <div className="text-center piece-count">
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
            />
        );
    }

    render() {
        return (
            <Row className="piece-row justify-content-md-center">
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
        if (this.props.game[i]) {
            return (
                <OccupiedSquare
                    value={this.props.squares[i]}
                    owner={this.props.game[i]}
                    onClick={() => this.props.onUpdatedClick(i)} //update handle method
                    isVisible={this.props.visibility_arr[i]} //pass in visibility info
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
                <Row className="board-row justify-content-md-center">
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
            log: [],
            pieces: ['F', 'B', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            player_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            computer_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            playerIsNext: true,
            gameStart: false,
            setupCompleted: false,
            current_piece: null,
            current_index: null,
            warning: null,
        };
    }

    handleClick(i) {
        if (this.state.gameStart) {
            /**
             * FIXME: hide number in real game, but display it for now
             */
            if (!this.state.current_piece) {
                return;
            }

            if (isValidMove(this.state.current_index, i, this.state.current_piece, this.state.game)) {
                // if selected index is valid compared to current index of selected piece, move piece to that index

                const game = this.state.game.slice();
                const squares = this.state.squares.slice();
                const log = this.state.log.slice();

                game[i] = 'P';
                game[this.state.current_index] = null;
                /**
                 * During setup, all of the pieces are placed by the player.
                 */

                squares[i] = this.state.current_piece;
                squares[this.state.current_index] = null;

                log.unshift('Player moved [' + this.state.current_piece + '] from cell ' + this.state.current_index + ' to cell ' + i);

                this.setState({
                    squares: squares,
                    game: game,
                    warning: null,
                    current_piece: null,
                    log: log,
                });

                // computer make a move - call a method
            }
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

            if (checkSetup(piece_count)) {
                const log = this.state.log.slice();
                log.unshift('Player setup completed')

                this.setState({
                    log: log,
                    setupCompleted: true,
                    current_piece: null,
                })
            }
        }
    }

    handlePlayerPieceOnBoardClick(i) {
        if (this.state.game[i] === 'C') {
            return; // Can't select computer piece to move
        }
        this.setState({
            current_piece: this.state.squares[i],
            current_index: i,
        });
    }

    resetPieceCounts() {
        this.setState({
            player_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            computer_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
        });
    }

    handlePlayerPieceClick(i) {
        this.setState({
            current_piece: this.state.pieces[i],
        });
    }

    handleCompleteSetup(playerIsNext) {
        /**
         * Fill in the board from bottom right corner (if player) or from top left corner (if computer).
         */
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

        //delete later
        const visibility_arr = this.state.visibility_arr.slice();

        for (var i = 0; i < piece_count.length; i++) {
            if (piece_count[i] > 0) {
                var piece = pieces[i];
                for (var j = right; j >= left; j--) {
                    if (!squares[j]) {
                        squares[j] = piece;
                        game[j] = playerIsNext ? 'P' : 'C';
                        //for now make it all visible for testing
                        //but later delete since initialized to false
                        visibility_arr[j] = true;

                        piece_count[i] = piece_count[i] - 1;
                        if (piece_count[i] <= 0) {
                            break;
                        }
                    }
                }
            }
        }

        this.setState({
            squares: squares,
            game: game,
            visibility_arr: visibility_arr, //delete later
        })

        const log = this.state.log.slice();
        if (playerIsNext) {
            log.unshift('Player setup completed')
            this.setState({
                player_piece_count: piece_count,
                setupCompleted: true,
                current_piece: null,
                log: log,
            })
        } else {
            log.unshift('Computer setup completed')
            this.setState({
                computer_piece_count: piece_count,
                gameStart: true,
                log: log,
                current_piece: null,
            })
            this.resetPieceCounts();
        }
    }

    render() {

        let status;
        let current_piece;

        status = 'Next turn: ' + (this.state.playerIsNext ? 'Player' : 'Computer');

        if (this.state.current_piece) {
            current_piece = 'Current Piece: ' + this.state.current_piece;
        } else {
            current_piece = 'No piece selected'
        }

        let warning = this.state.warning;

        return (
            <div>
                <Container className="game" fluid={true}>
                    <Row>
                        <Col md={2} className="mx-auto justify-content-md-center">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Button id="SetupBtn" className="btn-dark my-2" onClick={() => this.handleCompleteSetup(true)} disabled={this.state.setupCompleted}>
                                        {"Fill in remaining pieces"}
                                    </Button>
                                    <Button className="btn-dark my-2" onClick={() => this.handleCompleteSetup(false)} disabled={!this.state.setupCompleted || this.state.gameStart}>
                                        {"Start game"}
                                    </Button>
                                </Row>
                            </Container>
                            <Container className="game-info my-2">
                                <Row className="justify-content-md-center">
                                    <div>{status}</div>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <div>{current_piece}</div>
                                </Row>
                                <Row className="justify-content-md-center text-danger">
                                    <div>{warning}</div>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={8} className="mx-auto justify-content-md-center">
                            <Container className="computer-pieces">
                                <PieceTable
                                    pieces={this.state.pieces}
                                    piece_count={this.state.computer_piece_count}
                                    owner={'C'}
                                    onClick={(i) => this.handlePlayerPieceClick(i)}
                                />
                            </Container>
                            <Board
                                squares={this.state.squares}
                                game={this.state.game}
                                visibility_arr={this.state.visibility_arr}
                                onClick={(i) => this.handleClick(i)}
                                onUpdatedClick={(i) => this.handlePlayerPieceOnBoardClick(i)}
                            />
                            <Container className="player-pieces">
                                <PieceTable
                                    pieces={this.state.pieces}
                                    piece_count={this.state.player_piece_count}
                                    owner={'P'}
                                    onClick={(i) => this.handlePlayerPieceClick(i)}
                                />
                            </Container>
                        </Col>
                        <Col md={2}>
                            <ul>
                                {this.state.log.map((logItem, index) => (
                                    <li>{this.state.log[index]}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function checkSetup(piece_count) {
    /**
     * See if the sum of the piece counts === 0
     */
    return (piece_count.reduce((x, y) => x + y) === 0);
}

function isValidMove(current_index, target_index, current_piece, game) {
    //check piece to get number of steps
    return true;
}