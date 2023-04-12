import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isPanelActive, setIsPanelActive] = useState(true);

    const handleSignInClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsPanelActive(false);
    };

    const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsPanelActive(true);
    };

    console.log('render');

    return (
        <div className='grid min-h-screen place-items-center'>
            <div
                ref={containerRef}
                className={`${
                    isPanelActive && 'right-panel-active'
                } container-login`}
            >
                <div className='container__form container--signup'>
                    <form action='#' className='form' id='form1'>
                        <h2 className='form__title'>Регистрация</h2>
                        <input
                            type='text'
                            placeholder='Логин *'
                            className='input'
                        />
                        <input
                            type='email'
                            placeholder='Почта *'
                            className='input'
                        />
                        <input
                            type='password'
                            placeholder='Пароль *'
                            className='input'
                        />
                        <Link className='btn' to='/'>
                            <button type='button'>Регистрация</button>
                        </Link>
                    </form>
                </div>

                <div className='container__form container--signin'>
                    <form action='#' className='form' id='form2'>
                        <h2 className='form__title'>Вход</h2>
                        <input
                            type='email'
                            placeholder='Почта *'
                            className='input'
                        />
                        <input
                            type='password'
                            placeholder='Пароль *'
                            className='input'
                        />
                        <a href='#' className='link'>
                            Забыли пароль?
                        </a>
                        <Link to='/' className='btn'>
                            <button type='button'>Вход</button>
                        </Link>
                    </form>
                </div>

                <div className='container__overlay'>
                    <div className='overlay'>
                        <div className='overlay__panel overlay--left'>
                            <button
                                onClick={handleSignInClick}
                                className='btn'
                                id='signIn'
                            >
                                Вход
                            </button>
                        </div>
                        <div className='overlay__panel overlay--right'>
                            <button
                                className='btn'
                                id='signUp'
                                onClick={handleSignUpClick}
                            >
                                Регистрация
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
