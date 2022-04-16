import React, { useEffect, useState } from 'react';
import SingleServiceBox from '../SingleServiceBox/SingleServiceBox';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (

        <section id="services" className="py-4">
                <h2 className="text-center">Services</h2>
                <hr className="w-25 mx-auto text-main" />
                <div className="service-container my-5">

                {
                    services.map(service => <SingleServiceBox key={service.id} service={service} />)
                }
               
                </div>
        </section>
      
    );
};

export default Services;