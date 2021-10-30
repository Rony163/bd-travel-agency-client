import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-3">
            {
                services.length === 0 ?
                    <Spinner className='d-block mx-auto my-4' animation="border" variant="info" />
                    :
                    <div>
                        <h1 className="text-info">Our Travel Places</h1>
                        <Row xs={1} md={3} id="services" className="g-4 m-2 mt-0">
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default Services;