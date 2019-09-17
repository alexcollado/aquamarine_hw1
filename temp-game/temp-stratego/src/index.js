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
// import Col from 'react-bootstrap/Col'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function OccupiedSquare(props){
    //check owner first?
    if(props.owner === 'P'){
        return(
            <button className="square player-square">
                {props.value}
            </button>
        );
    }else{
        return(
            <button className="square computer-square">
                {props.value}
            </button>
        );
    }
}

function Piece(props) {
    return (
        <div>
            <Button className="player-piece" onClick={props.onClick}>
                {props.value}
            </Button>
            <div className="text-center">
                {'x' + props.count}
            </div>
        </div>
    );
}

class PieceTable extends React.Component {
    renderPiece(i) {
        return (
            <Piece
                value={this.props.pieces[i]}
                count={this.props.piece_count[i]}
                onClick={() => this.props.onClick(i)}
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
        if(this.props.game[i]){
            return(
                <OccupiedSquare 
                    value={this.props.squares[i]}
                    owner={this.props.game[i]}
                    //different onclick method? so that you can move it?
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
        this.state = {
            squares: Array(100).fill(null), //contains the values needed to display board
            game: Array(100).fill(null), // used to differentiate player from computer pieces
            player_pieces: ['F', 'B', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            player_piece_count: [1, 6, 1, 8, 5, 4, 4, 4, 3, 2, 1, 1],
            playerIsNext: true,
            current_piece: null,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] || !(this.state.current_piece)) {
            return;
        }
        let j = this.state.player_pieces.indexOf(this.state.current_piece);
       
        const piece_count = this.state.player_piece_count.slice();
        if(piece_count[j] <= 0){
            return; 
        }

        const game = this.state.game.slice();
        if(this.state.playerIsNext){
            // player's turn == P on game table
            game[i] = 'P';
        }else{
            // computer's turn == C on game table
            game[i] = 'C';
        }

        squares[i] = this.state.current_piece;
        piece_count[j] = (piece_count[j] - 1);

        this.setState({
            squares: squares,
            playerIsNext: !this.state.playerIsNext,
            player_piece_count: piece_count,
            game: game,
        });
    }

    handlePlayerPieceClick(i) {
        this.setState({
            current_piece: this.state.player_pieces[i],
        });
    }

    render() {
        const winner = calculateWinner(this.state.squares);

        let status;
        let current_piece;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next turn: ' + (this.state.playerIsNext ? 'Player' : 'Computer');
        }

        if(this.state.current_piece){
            current_piece = 'Current Piece: ' + this.state.current_piece;
        }else{
            current_piece = 'No piece selected'
        }

        return (
            <div>
                <div className="game">
                    <Board
                        squares={this.state.squares}
                        game={this.state.game}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <Container className="game-info">
                    <Row className="justify-content-md-center">
                        <div>{status}</div>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div>{current_piece}</div>
                    </Row>
                </Container>
                <Container className="player-pieces">
                    <PieceTable
                        pieces={this.state.player_pieces}
                        piece_count={this.state.player_piece_count}
                        onClick={(i) => this.handlePlayerPieceClick(i)}
                    />
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

function calculateWinner(squares) {
    return null;
}
