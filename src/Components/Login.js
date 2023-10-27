import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {

    

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Perform any form validation or other logic here

        // Redirect to the home page (you can specify the path you want to redirect to)
        window.location.href = '/home';
    };
    return (
        <Container className="my-5" style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'
        }}>
            <Row>
                <Col md={6} className="order-2 order-md-1">
                    <div className="login-form p-4">
                        <h2 className="mb-4">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter your username" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" block>
                                Log In
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <div className="login-image">
                        <img
                            src="images/school.jpeg" // Replace with your image URL
                            alt="Login"
                            className="img-fluid"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
