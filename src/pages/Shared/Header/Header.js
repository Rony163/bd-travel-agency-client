import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar fixed='top' expand="lg" className="bg-light">
                <Container fluid>
                    <img style={{ width: '80px', height: '40px' }} src={logo} alt="" />
                    <Navbar.Brand className="ms-3 text-info">BD Travel Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 ms-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} className="text-info" to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="text-info" to="/home#services">Services</Nav.Link>
                        </Nav>

                        <div className='d-flex flex-column flex-lg-row'>
                            <Nav.Link className="text-info me-2" as={Link} to='/login'>Logout</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link className="text-info me-2" as={Link} to='/login'>Login</Nav.Link>
                        </div>
                        <NavLink to="/">
                            <Button variant="outline-info">Book Now</Button>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;