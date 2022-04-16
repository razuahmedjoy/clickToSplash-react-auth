import React from 'react';
import heroBanner from '../../images/hero-banner.png';
import './Home.css'
const Home = () => {
    return (
        <div>
            <section id="hero" className="container">
                <div className="row py-5">
                    <div className="col-md-6 hero-description d-flex flex-column justify-content-center align-items-centers order-last order-md-first">
                        <h1 className="text-main">Welcome to Click To Splash</h1>
                        <p>Hello! I am Razu Ahmed Joy. A profession Photographer. Working as a photographer since 2007. I have participated in about 800+ photography events and served more than 1000+ clients with my shutter clicks.</p>
                        <button className="btn btn-outline-main rounded-pill w-50">See Plans</button>
                    </div>
                    <div className="col-md-6 hero-banner">
                        <img src={heroBanner} className="w-75" alt="" />
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;