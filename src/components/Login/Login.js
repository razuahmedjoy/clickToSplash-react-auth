import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Partials/Loading/Loading';
import SocialLogin from '../Partials/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    const emailRef= useRef();
    const [user, loading, error] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useSignInWithEmailAndPassword(auth);
    
      const [sendPasswordResetEmail, sending,error3] = useSendPasswordResetEmail(
        auth
      );
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

    const handlePasswordReset = ()=>{
        const email =  emailRef.current.value;
        if(!email){
            toast("Type your email and Click on Reset");
            return;
        }
        else{
            sendPasswordResetEmail(email)
            toast('email sent');
            
        }
    }
    return (
        
        <div>
            <ToastContainer></ToastContainer>
            <div className="form-container mx-2 mx-md-auto">
                <h2 className="text-main text-center mb-4">Login Now</h2>
                <p><small className="text-danger">
                    {error ? error:''}
                    {error2 ? error2?.message:''}
                    {error3 ? error3?.message:''}
                    </small></p>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" required />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>Don't have any account? <Link to="/register">Create Account Here</Link> </p>
                    <Button className="btn btn-outline-main bg-main text-light w-100" type="submit">
                        Login
                    </Button>
                   

                </Form>
                <p className="mt-2">
                    <small> Forgot Your Password? 
                        <span onClick={handlePasswordReset} className="text-main cursor-pointer" role="button">Reset</span></small> </p>

                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;