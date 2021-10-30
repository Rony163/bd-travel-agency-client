import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});
    const refUserName = useRef('')
    const refEmail = useRef('')
    const [singleService, setSingleService] = useState({});

    // load data from database
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handlePersonChange = e => {
        const updatePerson = e.target.value;
        const updateEvent = { ...singleService };
        updateEvent.person = updatePerson;
        setSingleService(updateEvent)
    }
    const handlePhoneNumberChange = e => {
        const updatePhone = e.target.value;
        const updateEvent = { ...singleService };
        updateEvent.mobile = updatePhone;
        setSingleService(updateEvent)
    }
    const handleDateOfTravel = e => {
        const updateDuration = e.target.value;
        const updateEvent = { ...singleService };
        updateEvent.date = updateDuration;
        setSingleService(updateEvent)
    }

    const handleSubmit = e => {
        singleService.name = refUserName.current.value;
        singleService.email = refEmail.current.value;
        singleService.ServiceName = service?.name;
        singleService.status = 'pending';
        console.log(singleService);

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Registration successful");
                    setService({});
                    e.target.reset();
                }
            })
        e.preventDefault();
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

                        <form onSubmit={handleSubmit}>
                            <input className="input-field" ref={refUserName} type="text" placeholder="Name" value={user.displayName || ''} />
                            <input className="input-field" ref={refEmail} type="email" placeholder='Email' value={user.email || ''} />
                            <input className="input-field" onChange={handlePersonChange} type="number" placeholder='Total Person' />
                            <input className="input-field" onChange={handlePhoneNumberChange} type="number" placeholder='Phone Number' />
                            <input className="input-field" onChange={handleDateOfTravel} type="number" placeholder='Date of Travel' />
                            <input className="input-field btn-submit" type="submit" value="Register" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;