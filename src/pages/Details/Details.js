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
                            <input className='input-place' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' value={user?.displayName || ''} />
                            <input className='input-place' {...register("email")} placeholder='Email' value={user?.email || ''} />
                            <input className='input-place' defaultValue="" type="number" {...register("totalPerson")} placeholder='Total Person' />
                            <input className='input-place' defaultValue="" type="number" {...register("phoneNumber")} placeholder='Phone No' />
                            <input className='input-place' defaultValue="" type="number" {...register("duration")} placeholder='Weekend Days' />
                            <input className='input-place btn-submit' type="submit" />
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;