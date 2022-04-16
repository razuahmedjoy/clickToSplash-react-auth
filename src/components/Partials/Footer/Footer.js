import { faAddressCard, faB, faBanSmoking, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import googleIcon from '../../../images/google.png'
import fbIcon from '../../../images/facebook.png'
import githubIcon from '../../../images/github.png'
const Footer = () => {
    return (
        <footer className="footer container-fluid bg-dark mt-5">
            <div className="row container footer-top mx-auto px-5">
                <div className="col-md-4 text-light">
                    <h3 className="py-2 text-left">Contact Me</h3>
                    <div className="contact-details">
                        <p>
                            <FontAwesomeIcon className="me-2" icon={faPhone} ></FontAwesomeIcon><span className="text-main">012345678</span>
                        </p>
                        <p>
                            <FontAwesomeIcon className="me-2" icon={faEnvelope} ></FontAwesomeIcon><span className="text-main">razuahmedbzs2018@gmail.com</span>
                        </p>
                        <p>
                            <FontAwesomeIcon className="me-2" icon={faAddressCard} ></FontAwesomeIcon><span className="text-main">Kanosgari, Bogra Sadar, Bogra, Bangladesh</span>
                        </p>

                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="text-light py-2">Important Links</h3>
                    <div className="important-links">
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/notFOund">Not Found Page</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="text-light py-2">Get me on Social</h3>
                    <div className="social-links">
                        <a className="btn rounded-circle bg-light" href="/">
                        <img src={googleIcon} width="15px" alt="" />
                        </a>
                        <a className="btn rounded-circle bg-light" href="/">
                        <img src={fbIcon} width="15px" alt="" />
                        </a>
                        <a className="btn rounded-circle bg-light" href="/">
                        <img src={githubIcon} width="15px" alt="" />
                        </a>
                      
                    </div>
                </div>
            </div>
            <div className="row bg-secondary text-light py-3 footer-bottom">
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} All Rights reserved </p>
            </div>

        </footer>
    );
};

export default Footer;