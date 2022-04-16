import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner width="120px" height="120px" animation="border" variant="primary" />
        </div>
    );
};

export default Loading;