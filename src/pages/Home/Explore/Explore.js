import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Explore = () => {
    return (
        <div>
            <h1 className="text-center text-info my-4 text-decoration-underline">Explore Bangladesh</h1>
            <Container className="mt-3">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className="w-100">
                            <iframe height="250" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                    <Col>
                        <div className="mt-3">
                            <p>Bangladesh is a beautiful place in the world and you can explore every attractive part of Bangladesh with this tour package. In reality, the tour is designed to get the overall experience in Bangladesh. To point out, You can look at the UNESCO declared World Heritage Sites as well as the most beautiful part of Bangladesh including Cox’s Bazar Beach or hilly areas of Chillagong. Important to realize, Travel Mate has designed the tour packages to give you a close insight of Dhaka City – The capital of Bangladesh as well as the beautiful division including Chittagong and Sylhet. In general, you can discover the traditional foods, culture and tributes very closely with this tour.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Explore;