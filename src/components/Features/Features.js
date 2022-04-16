import { faPeopleGroup, faPhotoFilm, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Features = () => {
    return (
        <div className="feature-container">
            <div className="single-feature p-4">
                <FontAwesomeIcon className="icons" icon={faPeopleGroup} />
                <h4>Professional Service</h4>
                <p className="text-muted">I am very professional about my services.</p>
            </div>
            <div className="single-feature p-4">
                <FontAwesomeIcon className="icons" icon={faPhotoFilm} />
                <h4>Amazing Editing</h4>
                <p className="text-muted">I always use professional tools to edit my splash</p>
            </div>
            <div className="single-feature p-4">
                <FontAwesomeIcon className="icons" icon={faTimeline} />
                <h4>Fastest Delivery</h4>
                <p className="text-muted">I always try to deliver the photos before delivery time.</p>
            </div>
        </div>
    );
};

export default Features;