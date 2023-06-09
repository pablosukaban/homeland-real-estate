import React from 'react';
import { useAppSelector } from '../hooks/redux';
import Review from './Review';

const Reviewers = () => {
    const { reviewers } = useAppSelector((state) => state.house);

    return (
        <section className='mb-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='mb-4 text-center text-2xl'>
                        <h1>
                            Что <span className='text-violet-500'>люди</span>{' '}
                            говорят о нас
                        </h1>
                    </div>
                    <div className='grid gap-4 lg:grid-cols-3 lg:gap-8'>
                        {reviewers.map((r) => (
                            <Review key={r.id} reviewer={r} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviewers;
