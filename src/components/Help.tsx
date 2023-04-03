import React from 'react';

const Help = () => {
    return (
        <section className='bg-violet-700 py-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between gap-y-4 md:flex-row'>
                    <div className='text-center text-white md:text-start'>
                        <h1 className='text-2xl font-semibold'>
                            Do You Have Questions?
                        </h1>
                        <p>Contact us and we will help you</p>
                    </div>
                    <div className=''>
                        <button className='rounded-full bg-white px-5 py-4 text-xl text-violet-700 transition hover:text-violet-900'>
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;
