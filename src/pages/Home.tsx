import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import Reviewers from '../components/Reviewers';

const Home = () => {
    return (
        <div className='min-h-[1800px]'>
            <Banner />
            <HouseList />
            <Reviewers />
        </div>
    );
};

export default Home;
