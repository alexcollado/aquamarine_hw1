import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login.jsx';

import '../resources/styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <Route path="/" component={Login} />
                </Router>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react'));