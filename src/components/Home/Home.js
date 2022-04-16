import { faPeopleGroup, faPhotoFilm, faTimeline, faVideoCamera, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import heroBanner from '../../images/hero-banner.png';
import Features from '../Features/Features';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <section id="hero" className="container py-md-3">
                <div className="row py-3 py-md-5">
                    <div className="col-md-6 hero-description d-flex flex-column justify-content-center align-items-centers order-last order-md-first">
                        <h1>Welcome to <span className="text-main"> Click To Splash</span></h1>
                        <p>Hello! I am Razu Ahmed Joy. A profession Photographer. Working as a photographer since 2007. I have participated in about 800+ photography events and served more than 1000+ clients with my shutter clicks.</p>
                        <a href="#services" className="btn btn-outline-main rounded-pill w-50">See Plans</a>
                    </div>
                    <div className="col-md-6 hero-banner">
                        <img src={heroBanner} className="w-75" alt="" />
                    </div>
                </div>
            </section>

            {/* features */}

            <section id="features">
                <h2>Why Choose me?</h2>
                <hr className="w-25 mx-auto text-main" />
                <Features></Features>
            </section>

            {/* service section */}

            <Services></Services>

        </div>
    );
};

export default Home;