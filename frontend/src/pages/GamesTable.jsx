import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from '../styles/GamesTable.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            isLoaded: false,
            allMoves: [],
        }
    }

    componentDidMount() {
        /**
         * add check if there are no moves
         */
        const games = this.props.gameIDs;
        Promise.all(games.map(g => fetch(`api/move/gameMoves/${g.id}`, {
            method: 'GET',
        })
        .then(response => {
            if(response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            if(data != null) {
                let arr = [];
                for(let i = 0; i < data.length; i++) {
                    let moves = {
                        description: data[i].description
                    }
                    arr.push(moves);
                }
                let moveCont = {
                    id: g.id,
                    moves: arr
                }
                this.setState(prevState => ({
                    allMoves: [...prevState.allMoves, moveCont],
                }))
                return data;
            }else{
                let arr = [];
                arr.push({
                    description: 'No moves recorded',
                });
                let moveCont = {
                    id: g.id,
                    moves: arr,
                }
                this.setState(prevState => ({
                    allMoves: [...prevState.allMoves, moveCont],
                }))
                return data;
            }
        }))).then(response => {
            this.setState({
                isLoaded: true
            })
        })
    }

    render() {
        if(this.state.isLoaded) {
            let gameRows = [];
            let games = this.props.gameIDs;
            for(let i = 0; i < games.length; i++) {
                let cur = this.state.allMoves.find(function(elem) {
                    return elem.id === games[i].id
                })
                gameRows.push([
                        <tr key={`wlgame${i}`}>
                            <td key={`stgame${i}`}>{`${games[i].state}`}</td>
                            <td key={`mvgame${i}`}>
                                <ul key={`ulgame${i}`}>
                                    {cur.moves.map((item, index) => {
                                        return <li key={`ulgame${i}${index}`}>{item.description}</li>;
                                    })}
                                </ul>
                            </td>
                        </tr>
                ])
            }
            return (
                <Fragment>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Win/Loss</th>
                            <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameRows}
                        </tbody>
                            
                    </Table>
                </Fragment>
            );
        }
        return (
            <div className={styles.loadingDiv}>
                <Spinner animation="grow" role="status" className={styles.spinner}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <div className={styles.loadMessageDiv}>
                    <h4>Loading...</h4>
                </div>
            </div>
        )
    }
}

export default UserMenu;
