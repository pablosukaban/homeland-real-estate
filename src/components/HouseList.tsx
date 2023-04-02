import React from 'react';
import { useAppSelector } from '../hooks/redux';
import House from './House';
import { Link } from 'react-router-dom';

const HouseList = () => {
    const { filteredHouses } = useAppSelector((state) => state.house);

    if (filteredHouses.length < 1) {
        return (
            <div className='mt-48 text-center text-3xl text-gray-400'>
                Sorry, nothing found
            </div>
        );
    }

    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-14'>
                    {filteredHouses.map((item) => (
                        <Link to={`/property/${item.id}`} key={item.id}>
                            <House houseObj={item} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HouseList;
