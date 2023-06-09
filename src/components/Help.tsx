import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <section className='bg-violet-700 py-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between gap-y-4 md:flex-row'>
                    <div className='text-center text-white md:text-start'>
                        <h1 className='text-2xl font-semibold'>
                            Остались вопросы?
                        </h1>
                        <p>Свяжитесь с нами и мы вам поможем</p>
                    </div>
                    <div className=''>
                        <Link to='/contact'>
                            <button className='rounded-full bg-white px-5 py-4 text-xl text-violet-700 transition hover:text-violet-900'>
                                Свяжитесь с нами сегодня
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;
