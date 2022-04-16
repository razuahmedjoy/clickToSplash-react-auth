import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Partials/Loading/Loading';
import SocialLogin from '../Partials/SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    // get previous page url
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'


    if(loading) {
        return <Loading></Loading>
    }
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div>
            <div className="form-container mx-2 mx-md-auto">
                <h2 className="text-main text-center mb-4">Login Now</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" required />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>Don't have any account? <Link to="/register">Create Account Here</Link> </p>
                    <Button className="btn btn-outline-main bg-main text-light w-100" type="submit">
                        Login
                    </Button>
                </Form>

                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;