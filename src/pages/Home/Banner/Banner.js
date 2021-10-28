import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className="mt-5" >
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-5.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-white bannerText">
                        <h1>Explore travel and make some fun!!!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-4.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-white bannerText">
                        <h1>Explore travel and make some fun!!!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-white bannerText">
                        <h1>Explore travel and make some fun!!!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;