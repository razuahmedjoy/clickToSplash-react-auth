import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Partials/Loading/Loading';
import SocialLogin from '../Partials/SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    
    const [user, loading, error] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useSignInWithEmailAndPassword(auth);

    // get previous page url
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'


    if(loading) {
        return <Loading></Loading>
    }
    if(user || user2){
        navigate(from,{replace:true});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <div className="form-container mx-2 mx-md-auto">
                <h2 className="text-main text-center mb-4">Login Now</h2>
                <p><small className="text-danger">
                    {error ? error:''}
                    {error2 ? error2?.message:''}
                    </small></p>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     
                        <Form.Control name="password" type="password" placeholder="Password" required />
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