import React from 'react';
import razuahmed from '../../images/razuahmed.jpg';
import './About.css'
const About = () => {
    return (
        <div className="py-4">

            <div className="container">
                <h2 className="text-main">About Me</h2>
                <hr className="w-25 text-main mx-auto" />
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column order-last order-md-first details my-2">
                        <h3>Hello I am Razu Ahmed Joy</h3>
                        <p>I am currently studying in Industrial Engineering & Management (IEM) at Khulna University of Engineering & Technology.</p>

                        <p>Basically I am fond of working with technologies from my childhood. Currently I am learning Web development With Javascript. I have Completed Javscript and it's basic Concepts. </p>
                        <p>Now I am learning React and it's work flow. I hope I can figure it out very soon and will see myself as a junior developer in near future</p>

                    </div>
                    <div className="col-md-6">
                        <img src={razuahmed} className="img-fluid about-me-image shadow" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;