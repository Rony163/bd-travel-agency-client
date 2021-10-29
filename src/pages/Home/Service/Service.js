import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name}</Card.Title>
                        <Card.Text> {description}</Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                        <Link to={`details/${id}`}>
                            <Button className="mb-2" variant="outline-info">Book Now</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div >
    );
};

export default Service;