import React, {Fragment, Component} from 'react';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     message: ""
        // }
    }

    // componentDidMount() {
    //     fetch('/')
    //         .then(response => response.text())
    //         .then(message => {
    //             this.setState({message: message});
    //         });
    // }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <header className="App-header">
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Fragment>
        );
    }
}

export default App;
