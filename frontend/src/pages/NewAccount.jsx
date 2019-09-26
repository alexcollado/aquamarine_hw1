import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from '../styles/NewAccount.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewAccount extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            validCredentials: true,
            accepted: false,
        };
    }
    
    handleSubmit = event => {
            let form = event.target
        
            const acc = {
                first_name: form.elements.firstName.value,
                last_name: form.elements.lastName.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            }
            console.log(JSON.stringify(acc));
            fetch('api/user/addUser', {
                method: 'POST',
                body: JSON.stringify(acc),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if(response.status !== 200) {
                    return null;
                }
                return response;
            })
            .then(data => {
                if(data === null) {
                    this.setState({
                        validCredentials: false
                    })
                }
                else {
                    this.setState({
                        accepted: true,
                        validCredentials: true
                    })
                }
            })
            event.preventDefault();
    }

    render() {
        let validMessage = "";
        let invalidMessage = ""
        if(this.state.accepted) validMessage = "Account successfully created! Please return to the login page to login."
        if(!this.state.validCredentials) invalidMessage = "An account with that email has already been taken."
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className={styles.titleDiv}>
                                <h4>New Account</h4>
                            </div>

                            <div>
                                <h6 className={styles.validMessage}>{validMessage}</h6>
                                <h6 className={styles.invalidMessage}>{invalidMessage}</h6>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>

                                    <Form.Control 
                                        required
                                        type="firstName" 
                                        placeholder="Enter first name" 
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>

                                    <Form.Control 
                                        required
                                        type="lastName" 
                                        placeholder="Enter last name" 
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>

                                    <Form.Control 
                                        required
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
                                        required
                                        type="password" 
                                        placeholder="Enter password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <div>

                                    <Button 
                                        type="submit"
                                        className={`${styles.createAcc} ${styles.btn}`}
                                    >
                                        Create Account
                                    </Button>

                                    <Link to="/">
                                        <Button 
                                            className={`${styles.login} ${styles.btn}`}
                                        >
                                            Return to Login
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

export default NewAccount;