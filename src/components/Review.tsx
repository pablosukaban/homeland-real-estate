import React from 'react';
import { reviewType } from '../data';

interface ReviewProps {
    reviewer: reviewType;
}

const Review = ({ reviewer }: ReviewProps) => {
    return (
        <div className='rounded p-6 transition hover:bg-gray-100'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <div>
                        <img src={reviewer.photo} alt='Reviewer photo' />
                    </div>
                    <div>
                        <h1 className='text-lg'>{reviewer.name}</h1>
                        <h2 className='text-gray-400'>{reviewer.date}</h2>
                    </div>
                </div>
                <div>
                    <p className='text-base'>{reviewer.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
