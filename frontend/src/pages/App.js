import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import UserMenu from './UserMenu';
import NewAccount from './NewAccount';
import Error from './Error';

// test comment

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/createaccount" component={NewAccount} />
                        <Route path="/menu" component={UserMenu} />
                        <Route path="/play" component={Game} />
                        <Route component={Error} />
                    </Switch>
                    
                </Router>
            </Fragment>
        );
    }
}

export default App;
