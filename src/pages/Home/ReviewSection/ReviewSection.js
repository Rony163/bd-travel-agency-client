import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ReviewSection.css';

const ReviewSection = () => {
    return (
        <div>
            <h1 className="text-center text-info my-4 text-decoration-underline">Review</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <div className="img-style">
                                <div className="w-50">
                                    <img className="img-fluid card-image" src="https://lh3.googleusercontent.com/proxy/LVGstM7NLreBL-Ipua6JH_P4qdC5-iJr58dkaTDrE6M4cX08Ujfp-H0iAKZY30gYESsSav4w7P64p8-ztNbZltQBK4evmmVzCcdDmGiVW3yWTQSDpK-65U3k4JA_iHjiYgsjCOX52oQ1k65tJSQ2oAt0kw" alt="" />
                                </div>
                                <div className="w-50">
                                    <Card.Body>
                                        <Card.Title>Shakib Hasan</Card.Title>
                                        <Card.Text>
                                            This is a beautiful place here you can go and have some fun.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="img-style">
                                <div className="w-50">
                                    <img className="img-fluid card-image" src="https://worldofwanderlust.com/wp-content/uploads/2014/07/IMG_27971.jpg" alt="" />
                                </div>
                                <div className="w-50">
                                    <Card.Body>
                                        <Card.Title>Emma Watson</Card.Title>
                                        <Card.Text>
                                            Such a beautiful website to explore world by this website.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="img-style">
                                <div className="w-50">
                                    <img className="img-fluid card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo14yTsfbczmBjHJls72FiGbjI2_5L9Ro_ew&usqp=CAU" alt="" />
                                </div>
                                <div className="w-50">
                                    <Card.Body>
                                        <Card.Title>Jakia Khan</Card.Title>
                                        <Card.Text>
                                            There are so many places in this website, you need to check it must.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewSection;