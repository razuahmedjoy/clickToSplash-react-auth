import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div className="form-container mx-2 mx-md-auto">
            <h2 className="text-main text-center mb-4">Create Account</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Again Password" required />
                </Form.Group>
                <p>Already have an account? <Link to="/Login">Login Here</Link> </p>
                <Button className="btn btn-outline-main bg-main text-light w-100" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>

    </div>
    );
};

export default Register;