import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GamesTable from './GamesTable'
import styles from '../styles/UserMenu.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            isLoaded: false,
            games: []
        }
    }

    componentDidMount() {
        fetch(`api/user/getUser/${this.props.playerID}`, {
            method: 'GET',
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setTimeout(() => {
                this.setState({
                    name: data.first_name,
                    isLoaded: true
                })
            }, 2000);
        })

        fetch(`api/game/playerGames/${this.props.playerID}`, {
            method: 'GET',
        })
        .then(response => {
            if(response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            if(data !== null) {
                let arr = [];
                for(let i = 0; i < data.length; i++) {
                    let game = {
                        id: data[i].id,
                        state: data[i].state,
                        moves: []
                    }
                    arr.push(game);
                }
                console.log(arr)
                this.setState({
                    games: arr
                })
            }
        })
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <Fragment>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={10}>
                                <div className={styles.titleDiv}>
                                <h1 className={styles.title}>Strateg<span className={styles.emoji}>🤣</span></h1>
                                    <h5>The classic game of battlefield strategy</h5>
                                    <h6>updated for today's millenials</h6>
                                </div>
                                <div className={styles.titleDiv}>
                                    <h3>Welcome {this.state.name}</h3>
                                    <Button 
                                        className={styles.signOutBtn}
                                        onClick={this.props.signOut}
                                        size="sm"
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                                <div className={styles.btnDiv}>
                                    <Link to="/play" className={styles.playLink}>
                                        <Button className={`${styles.btn} ${styles.playBtn}`} size="lg">
                                            Play
                                        </Button>
                                    </Link>
                                </div>
                                <div className={styles.gameTable}>
                                    <h4>Game History</h4>
                                    <GamesTable gameIDs={this.state.games} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
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
