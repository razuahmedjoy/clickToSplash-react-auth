import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleServiceBox.css'
const SingleServiceBox = ({service}) => {

    const navigate = useNavigate()

    const navigateToCheckOut =()=>{
        navigate('/checkout');
    }
    const {name,price,features} =service;
    return (
        <div className="single-service">
            <h4>{name}</h4>
            <h2 className="mb-5">${price}</h2>
            <div className="service-texts">
                <ul>

                   {
                       features.map((feature,index) => <li key={index}><FontAwesomeIcon className="text-main mx-2" icon={faCircleRight}></FontAwesomeIcon>{feature}</li>)
                   }

                </ul>
            </div>
            <button onClick={navigateToCheckOut} className="btn bg-main text-light book-now rounded-pill">Book Now</button>

        </div>
    );
};

export default SingleServiceBox;