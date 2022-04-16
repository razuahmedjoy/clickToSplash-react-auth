
import React from 'react';
import './SocialLogin.css'
import googleIcon from '../../../images/google.png'
import fbIcon from '../../../images/facebook.png'
import githubIcon from '../../../images/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className="my-3 mx-3">Or</p>
                <div className="line"></div>
            </div>

            <div className="social-buttons d-flex flex-column justify-content-center align-items-center gap-2 mx-3">
                <button className="w-100 btn btn-outline-danger">
                    <img className="img-fluid mx-2" src={googleIcon} width="15px" height="15px" alt="Google" />
                    Sign in With Google</button>
                <button className="w-100 btn btn-outline-primary">
                    <img className="img-fluid mx-2" src={fbIcon} width="15px" height="15px" alt="fb" />
                    Sign in With Facebook
                </button>
                <button className="w-100 btn btn-outline-secondary">
                    <img className="img-fluid mx-2" src={githubIcon} width="15px" height="15px" alt="github" />
                    Sign in With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;