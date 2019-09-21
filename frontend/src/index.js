import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import './styles/game.css';
import App from './pages/App';
import Game from './pages/Game';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

serviceWorker.unregister();
