import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Events.css';

const Events = (props) => {
    const { _id, name, email, mobile, person, ServiceName, status } = props.event;
    return (
        <div>
            <Col className="shadow">
                <Card>
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Email: {email}</Card.Title>
                        <Card.Title>Phone Number: {mobile}</Card.Title>
                        <Card.Title>Total Person: {person}</Card.Title>
                        <Card.Title>Status: {status}</Card.Title>
                        <Card.Title>Place Name: {ServiceName}</Card.Title>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Delete</button>
                </Card>
            </Col>
        </div>
    );
};

export default Events;