import React from 'react';
import { Link } from 'react-router-dom';
import norFoundImage from '../../images/404.png'
const NotFound404 = () => {
    return (
        <div className="">
            <img src={norFoundImage} width="300px" alt="" />
            <h3>The Page Not Found on the server</h3>
            <Link to="/" className="btn bg-main text-light mt-3">Back To Home</Link>
        </div>
    );
};

export default NotFound404;