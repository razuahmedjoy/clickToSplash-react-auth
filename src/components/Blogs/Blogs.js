import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="my-5">
            <h2>Welcome to my Blog Page</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-3">
                        <div className="card shadow single-blog">
                            <div className="card-header title fw-bold bg-main text-light">Difference between authorization and authentication</div>
                            <div className="card-body">
                                <strong>Authentication: </strong>
                                <p>Authentication is a process where the identity of the user is checked. When user inputs any data , in athuentication it is checked that if the user is true or false according to his input.</p>
                                <strong>Athorization: </strong>
                                <p>Whereas Authorization is a process where it is checked that if the user has any special priviledge! Like In which files, location the user can access to! To verify the accessibility of the user is <strong>Authorization</strong>, but only checking the users identity is called <strong>Authentication</strong> </p>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-md-6 p-3">
                        <div className="card shadow single-blog">
                            <div className="card-header title fw-bold bg-main text-light">Why are you using firebase? What other options do you have to implement authentication?</div>
                            <div className="card-body">
                                <strong>Firebase: </strong>
                                I am using Firebase for Authentication purpose and in some cases for hosting our app.
                                <p><strong>Some Alternatives of Firebase to Implement Authentication:</strong></p>
                                <li>Auth0</li>
                                <li>MongoDB</li>
                                <li>JSON web token</li>
                                <li>Okta</li>
                                <li>Passport</li>

                                These are some alternatices of Firebase to implement authentication system. On the other hand we can build our own custom authentication system also though it is more complex.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="card shadow single-blog">
                            <div className="card-header title fw-bold bg-main text-light">What other services does firebase provide other than authentication</div>
                            <div className="card-body">
                                <strong>Firebase: </strong>
                               Firebase Provides Many Services other than Authentication. like
                               <li>Cloud Firestore</li>
                               <li>Hosting</li>
                               <li>Cloud Storage</li>
                               <li>Google Analytics</li>
                               <li>CLoud Messaging</li>
                               <li>Database</li>
                               and many more...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;