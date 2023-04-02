import React from 'react';
import Image from '../assets/house-banner.png';
import Search from './Search';

const Banner = () => {
    return (
        <section className='mb-8 h-full max-h-[640px] xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-1 flex-col items-center justify-center px-4 text-center lg:ml-8 lg:items-start lg:px-0 lg:text-left xl:ml-[135px]'>
                    <h1 className='mb-6 text-4xl font-semibold leading-none lg:text-[58px]'>
                        <span className='text-violet-700'>Rent</span> Your Dream
                        House With Us.
                    </h1>
                    <p className='mb-8 max-w-[480px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore aspernatur officia, quaerat dicta soluta id illum
                        eligendi ex quibusdam consequatur.
                    </p>
                </div>
                <div className='hidden flex-1 items-end justify-end lg:flex'>
                    <img src={Image} alt='Banner House' />
                </div>
            </div>
            <Search />
        </section>
    );
};

export default Banner;
