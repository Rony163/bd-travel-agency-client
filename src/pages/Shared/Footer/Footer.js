import React from 'react';
import { Col, Row } from "react-bootstrap";
import logo2 from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg mt-5'>
            <Row>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <img className='img-fluid img-sized' style={{ height: '80px' }} src={logo2} alt="" />
                        <p className="p-2">All services are available with reasonable price. Call for more information 585-394-2020 available 24/7.</p>
                    </div>

                </Col>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <h2 className='fw-bold'>Contact us</h2>
                        <p> <i class="fas fa-map-marker icon-color me-2"></i> 04360, Dhaka, Solimulla road, 12/4</p>
                        <p><i class="fas fa-phone-alt icon-color me-2"></i> 803-33-5644-99</p>
                        <p><i class="fas fa-envelope icon-color me-2"></i> admin@bdtravelagency.net</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <h2>important Links</h2>
                        <div>
                            <a className='d-block footer-link' href="/"><i class="fab fa-facebook-square icon-color me-2"></i> Connect with Facebook</a>
                            <a className='d-block footer-link' href="/"><i class="fab fa-youtube-square icon-color me-2"></i> Connect with YouTube</a>
                            <a className='d-block footer-link' href="/"><i class="fab fa-instagram icon-color me-2"></i> Connect with Instagram</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{ backgroundColor: '#000000' }} className='py-3 text-white text-center'>
                <p className='text-white mt-2'>Copyright &copy; by  <span className='text-info'>Minhajul Islam Rony</span></p>
            </div>

        </div>
    );
};

export default Footer;