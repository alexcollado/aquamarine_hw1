import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import styles from '../styles/Home.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
    
        this.state = {
          validUser: false
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleSubmit = event => {
        let form = event.target
        
        const acc = {
            email: form.elements.email.value,
            password: form.elements.password.value
        }
        console.log(acc);
        fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify(acc),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data === -1) {
                if(this._isMounted)
                    this.setState({
                        validUser: false
                    })
            }
            else {
                this.props.authorize(data);
                if(this._isMounted)
                    this.setState({
                        validUser: true
                    })
            }
        })
        event.preventDefault();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className={styles.titleDiv}>
                                <h1 className={styles.title}>Stratego</h1>
                                <h5>The classic game of battlefield strategy</h5>
                            </div>

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>

                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />

                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else (Unless we're hacked).
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <div>
                                    <Button 
                                        type="submit"
                                        className={`${styles.login} ${styles.btn}`}
                                    >
                                        Login
                                    </Button>

                                    <Link to="/createaccount">
                                        <Button 
                                            type="submit"
                                            className={`${styles.createAcc} ${styles.btn}`}
                                        >
                                            Create Account
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;
