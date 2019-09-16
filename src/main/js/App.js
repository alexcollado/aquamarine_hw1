import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react'))