import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './CheckOut.css'
const CheckOut = () => {
    const { serviceid } = useParams();
    const [service, setService] = useState([])
    // console.log(serviceid)
    useEffect(() => {
        fetch('../data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceid])
    const selectedService = service.find(item => item.id === parseInt(serviceid))
    const handleCheckOut = (event)=>{
        event.preventDefault();

        toast("Thanks for Your Order. ")
    }
    return (
    
        <div className="container my-4">
                <ToastContainer/>
            <h2>Checkout</h2>
            <div className="checkout row py-2">
                <div className=" col-md-6 package-details">
                    
                    <div className="image-box">

                    <img src={selectedService?.image} className="w-100 checkout-image img-fluid" alt="" />
                    <div className="overlay"></div>
                    
                    <div className="checkout-details">
                    <h3>{selectedService?.name}</h3>
                    <h1>${selectedService?.price}</h1>
                    </div>
                    </div>

                </div>
                <Form onSubmit={handleCheckOut} className="col-md-6 card p-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" placeholder="Enter name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" placeholder="1234 Main St" required/>
                    </Form.Group>

                  

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="number" type="number" required/>
                        </Form.Group>

                     

                       
                    </Row>

             

                    <Button variant="primary" type="submit">
                       Confirm
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;