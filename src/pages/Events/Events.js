import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Events.css';

const Events = (props) => {
    const { _id, name, email, mobile, person, date, ServiceName, status } = props.event;
    return (
        <div>
            <Col className="shadow">
                <Card>
                    <Card.Body>
                        <Card.Title>Place Name: {ServiceName}</Card.Title>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Phone Number: {mobile}</p>
                        <p>Total Person: {person}</p>
                        <p>Journy Date: {date}</p>
                        <p>Status: {status}</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Delete</button>
                </Card>
            </Col>
        </div>
    );
};

export default Events;