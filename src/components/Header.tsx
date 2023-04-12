import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
    return (
        <header className='mb-12 border-b py-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='transition hover:text-violet-900' to=''>
                        Вход
                    </Link>
                    <Link
                        className='rounded-lg bg-violet-700 px-4 py-3 text-white transition hover:bg-violet-800'
                        to=''
                    >
                        Регистрация
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
