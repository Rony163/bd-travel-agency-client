import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Explore></Explore>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;