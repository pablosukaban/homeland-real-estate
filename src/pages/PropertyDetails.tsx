import React, { useRef } from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import Toastify from 'toastify-js';
import { convertFootToMeter } from '../utils';

const PropertyDetails = () => {
    const { houses } = useAppSelector((state) => state.house);
    const { id } = useParams();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    if (!id) {
        return <div>Ошибка, такого дома нет</div>;
    }

    const mainHouse = houses.find((h) => h.id === parseInt(id));

    if (!mainHouse) {
        return <div>Ошибка, такого дома нет</div>;
    }

    const handleSendMessage = () => {
        if (
            !nameRef.current ||
            !emailRef.current ||
            !phoneRef.current ||
            !messageRef.current
        ) {
            return;
        }

        if (
            !nameRef.current.value ||
            !emailRef.current.value ||
            !phoneRef.current.value ||
            !messageRef.current.value
        ) {
            Toastify({
                text: 'Fill in all the fields!',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: 'bottom', // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                className:
                    'fixed bg-red-700 text-white px-5 py-4 rounded flex gap-2 right-2 bottom-2',
            }).showToast();

            return;
        }

        Toastify({
            text: 'Message sent!',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: 'bottom', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className:
                'fixed bg-violet-700 text-white px-5 py-4 rounded flex gap-2 right-2 bottom-2',
        }).showToast();

        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <section>
            <div className='container mx-auto mb-14 min-h-[800px]'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'>
                            {mainHouse.name}
                        </h2>
                        <h3 className='mb-4 text-lg'>{mainHouse.address}</h3>
                    </div>
                    <div className='mb-4 flex gap-x-2 text-sm lg:mb-0'>
                        <p className='rounded-full bg-green-500 px-3 text-white'>
                            {mainHouse.type}
                        </p>
                        <p className='rounded-full bg-violet-500 px-3 text-white'>
                            {mainHouse.country}
                        </p>
                    </div>
                    <p className='text-3xl font-semibold text-violet-500'>
                        $ {mainHouse.price}
                    </p>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={mainHouse.imageLg} alt='House image' />
                        </div>
                        <div className='mb-6 flex gap-x-6 text-violet-700'>
                            <div className='flex items-center gap-x-2'>
                                <BiBed className='text-2xl' />
                                <p>{mainHouse.bedrooms}</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <BiBath className='text-2xl' />
                                <p>{mainHouse.bathrooms}</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <BiArea className='text-2xl' />
                                <p>{convertFootToMeter(mainHouse.surface)}</p>
                            </div>
                        </div>
                        {mainHouse.description.map((item) => (
                            <p key={item} className='mb-2'>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className='mb-8 w-full flex-1 rounded-lg border border-gray-300 bg-white px-6 py-8'>
                        <div className='mb-8 flex items-center gap-x-4'>
                            <div className='h-20 w-20 rounded-full border border-gray-300 p-1'>
                                <img
                                    src={mainHouse.agent.image}
                                    alt='Agent image'
                                />
                            </div>
                            <div>
                                <p className='text-lg font-bold'>
                                    {mainHouse.agent.name}
                                </p>
                                <Link to='' className='text-sm text-violet-700'>
                                    Показать записи
                                </Link>
                            </div>
                        </div>
                        <form className='flex flex-col gap-y-4'>
                            <input
                                type='text'
                                className='h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700'
                                placeholder='Имя *'
                                ref={nameRef}
                            />
                            <input
                                type='text'
                                className='h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700'
                                placeholder='Фамилия *'
                                ref={nameRef}
                            />
                            <input
                                type='email'
                                className='h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700'
                                placeholder='Почта *'
                                ref={emailRef}
                            />
                            <input
                                type='tel'
                                className='h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700'
                                placeholder='Телефон *'
                                ref={phoneRef}
                            />
                            <textarea
                                className='h-36 w-full resize-none rounded border border-gray-300 p-4 text-sm text-gray-400 outline-none focus:border-violet-700'
                                placeholder='Сообщение *'
                                defaultValue={
                                    'Здравствуйте, меня заинтересовало жилье ' +
                                    mainHouse.name
                                }
                                ref={messageRef}
                            ></textarea>
                            <div className='flex flex-col gap-2 sm:flex-row'>
                                <button
                                    type='button'
                                    className='w-full rounded bg-violet-700 p-4 text-sm text-white transition hover:bg-violet-800'
                                    onClick={handleSendMessage}
                                >
                                    Отправить
                                </button>
                                <button
                                    type='button'
                                    className='w-full rounded border border-violet-700 p-4 text-sm text-violet-700 transition hover:border-violet-500 hover:text-violet-500'
                                >
                                    Позвонить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;
