import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from '../styles/UserMenu.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            isLoaded: false
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
            this.setState({
                name: data.first_name,
                isLoaded: true
            })
        })
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <Fragment>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                <div className={styles.titleDiv}>
                                    <h3 className={styles.title}>Welcome {this.state.name}</h3>
                                </div>
                                <Link to="/play">
                                    <Button>
                                        Play
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        return (
            <div>loading</div>
        )
    }
}

export default UserMenu;
