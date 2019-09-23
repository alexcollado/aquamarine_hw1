import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from '../styles/Error.module.css';

import Button from 'react-bootstrap/Button';

class Error extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.container}>
                    <div className={styles.errorDiv}>
                        <h1 className={styles.errorTitle}>404</h1>
                        <h5>Whoops. Looks like you're lost. Aren't we all?</h5>
                    </div>

                    <div className={styles.returnDiv}>
                        <Link to="/">
                            <Button className={styles.btn}>Return</Button>
                        </Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Error;
