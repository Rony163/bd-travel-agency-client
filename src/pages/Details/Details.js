import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const { user } = useFirebase();
    const [service, setService] = useState({});

    // load data from database
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const preloadValues = {
        name: user?.displayName,
        email: user?.email,
    }

    const { register, handleSubmit, reset } = useForm({
        defaultValues: preloadValues
    });


    const onSubmit = data => {
        data.status = "pending";
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Registration successful");
                    reset();
                }
            })
    };

    return (
        <Container>
            <Row style={{ marginTop: '80px' }}>
                <Col xs={12} md={6}>
                    <div>
                        <img className="img-fluid" src={service.img} alt="" />
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <h1>Booking Here</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="input-field"{...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                            <input className="input-field"{...register("email", { required: true, maxLength: 30 })} placeholder="Email" />

                            <input className="input-field"{...register("date", { required: true, maxLength: 20 })} placeholder="Date" />

                            <input className="input-field"{...register("mobile", { required: true, maxLength: 20 })} placeholder="Phone" />

                            <input className="input-field"{...register("person", { required: true, maxLength: 20 })} placeholder="Person" />

                            <input className="input-field"{...register("ServiceName")} placeholder="Service name" value={service.name || ''} />

                            <input className='input-field btn-submit' type="submit" value="Submit" />
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;