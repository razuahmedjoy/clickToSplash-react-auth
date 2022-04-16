import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleServiceBox.css';
import heroBanner from '../../images/hero2.jpg';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const SingleServiceBox = ({ service }) => {

    const navigate = useNavigate()

    const navigateToCheckOut = () => {
        navigate('/checkout');
    }
    const { name, price, features,image } = service;
    return (
       
        <div className="single-service">
        <div style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h3>${price}</h3>
                <div className="service-texts">
                 <ul>

                    {
                        features.map((feature,index) => <li key={index}><FontAwesomeIcon className="text-main mx-2" icon={faCircleRight}></FontAwesomeIcon>{feature}</li>)
                    }

                 </ul>
             </div>
            </Card.Body>
            
            <Card.Body>
            <button onClick={navigateToCheckOut} className="btn bg-main text-light book-now rounded-pill">Book Now</button>
            </Card.Body>
        </div>
        </div>
    );
};

export default SingleServiceBox;