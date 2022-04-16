import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Partials/SocialLogin/SocialLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Partials/Loading/Loading';

const Register = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    if(loading) {
        return <Loading></Loading>
    }
    if(user){
        navigate('/')
    }
    return (
        <div>
        <div className="form-container mx-2 mx-md-auto">
            <h2 className="text-main text-center mb-4">Create Account</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                   
                    <Form.Control type="text" placeholder="Enter name" required />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p>Already have an account? <Link to="/login">Login Here</Link> </p>
                <Button className="btn btn-outline-main bg-main text-light w-100" type="submit">
                    Create Account
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>

    </div>
    );
};

export default Register;