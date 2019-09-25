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
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {
        let form = event.target
        
        const acc = {
            firstName: form.elements.firstName.value,
            lastName: form.elements.lastName.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }
        fetch('api/user/addUser', {
            method: 'POST',
            body: JSON.stringify(acc),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log(response);
        })
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className={styles.titleDiv}>
                                {/* <h1 className={styles.title}>Stratego</h1> */}
                                <h4>New Account</h4>
                            </div>

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>

                                    <Form.Control 
                                        type="firstName" 
                                        // inputRef={input => this.textInput = input}
                                        placeholder="Enter first name" 
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>

                                    <Form.Control 
                                        type="lastName" 
                                        placeholder="Enter last name" 
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

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
                                            type="submit"
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