import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='bg-dark p-1 mb-1 mt-5'>
                <div className='footer d-flex  mt-5 mb-2 justify-content-around w-100 '>
                    <div>
                        <h6 className='text-white'>About Us</h6>
                        <Link to="/">Aim</Link>
                        <br />
                        <Link to="/">Vision</Link>
                        <br />
                        <Link to="/">work</Link>
                        <br />
                        <Link to="/">Testimonials</Link>
                    </div>
                    <div>
                        <h6 className='text-white'>Services</h6>
                        <Link to="/">Coxe's Bazar</Link>
                        <br />
                        <Link to="/">Rangamati</Link>
                        <br />
                        <Link to="/">Sundarban</Link>
                        <br />
                        <Link to="/">Bandarban</Link>
                        <br />
                    </div>
                    <div>
                        <h6 className='text-white'>Contact Us</h6>
                        <Link to="/">Dhaka</Link>
                        <br />
                        <Link to="/">Mirpur</Link>
                        <br />
                        <Link to="/">Uttara</Link>
                        <br />
                        <Link to="/">Rangpur</Link>
                    </div>
                    <div>
                        <h6 className='text-white'>Social Media</h6>
                        <Link to="/">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </Link>
                        <br />
                        <Link to="/">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </Link>
                        <br />
                        <Link to="/">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </Link>
                        <br />
                        <Link to="/">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </Link>
                    </div>

                </div>
                <p className='text-white border-top text-center'>Copyright by  &copy;Minhajul Islam Rony</p>

            </div>

        </div>
    );
};
export default Footer;