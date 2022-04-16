import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLogin.css'
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className="my-3 mx-3">Or</p>
                <div className="line"></div>
            </div>

            <div className="social-buttons d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-outline-danger">
                    <FontAwesomeIcon></FontAwesomeIcon>
                    Sign in With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;