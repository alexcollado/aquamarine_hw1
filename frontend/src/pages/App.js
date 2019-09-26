import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import UserMenu from './UserMenu';
import NewAccount from './NewAccount';
import Error from './Error';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthed: false,
            playerID: -1
        }
    }

    authorize = (id) => {
        this.setState({
            isAuthed: true,
            playerID: id
        })
    }

    signOut = () => {
        this.setState({
            isAuthed: false,
            playerID: -1
        })
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => (
                            this.state.isAuthed ? (
                                <Redirect to="/menu" />
                            ) : (
                                <Home authorize={this.authorize} />
                            )
                        )}/>
                        <Route path="/createaccount" exact render={() => (
                            this.state.isAuthed ? (
                                <Redirect to="/menu" />
                            ) : (
                                <NewAccount />
                            )
                        )}/>
                        <Route path="/menu" render={() => (
                            this.state.isAuthed ? (
                                <UserMenu playerID={this.state.playerID} signOut={this.signOut} />
                            ) : (
                                <Redirect to="/" />
                            )
                        )}/>
                        <Route path="/play" render={() => (
                            this.state.isAuthed ? (
                                <Game playerID={this.state.playerID} />
                            ) : (
                                <Redirect to="/" />
                            )
                        )}/>
                        <Route component={Error} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default App;
