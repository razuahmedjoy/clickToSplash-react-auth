import { Button } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Partials/SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Partials/Loading/Loading';

const Register = () => {

    const emailRef = useRef()
    const nameRef = useRef();
    const pass1Ref = useRef();
    const pass2Ref = useRef();

    const [user, loading, error] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        createduser,
        loading2,
        error2,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, error3] = useUpdateProfile(auth);

    const [userError,setUserError] = useState('');
    
    const navigate = useNavigate()
    if(loading || loading2) {
        return <Loading></Loading>
    }
    if(user || createduser){
        navigate('/')
    }

    const handleFormSubmit = async (e)=>{
        setUserError('')
        e.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value
        const pass1 = pass1Ref.current.value
        const pass2 = pass2Ref.current.value
        if(pass1.length < 6){
            setUserError('Password Must be 6 Charecters Long')
            return;
        }
        if(pass1 !== pass2){
            setUserError('Both password Field should be same');
            return
        }

        await createUserWithEmailAndPassword(email,pass1)
        await updateProfile({displayName:name});


    }

    return (
        <div>
        <div className="form-container mx-2 mx-md-auto">
            <h2 className="text-main text-center mb-4">Create Account</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                   
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={pass1Ref} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Control ref={pass2Ref} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p><small className="text-danger">{userError}</small></p>
                <p><small className="text-danger">{error2?.message}</small></p>
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