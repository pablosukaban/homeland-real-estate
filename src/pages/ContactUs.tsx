import React, { useState } from 'react';

export const ContactInfoCard = () => {
    return (
        <div className='bg-violet-600 p-4 text-base text-white md:px-10 md:py-8 md:text-lg'>
            <h2 className='font-semibold'>HomeLand Inc.</h2>
            <p>2690 Cheshire Road Stratford, GA 06497</p>
            <h2>
                <span className='font-semibold'>Телефон:</span> 203-386-5302
            </h2>
        </div>
    );
};

export const CustomerSupportCard = () => {
    return (
        <div className='bg-violet-600 p-4 text-base text-white md:px-10 md:py-8 md:text-lg'>
            <h2 className='font-semibold'>Обслуживание клиентов</h2>
            <h3>
                <span className='font-semibold'>Время работы:</span> 9:00 –
                18:00
            </h3>
            <h3>
                <span className='font-semibold'>Почта:</span> help@homeland.com
            </h3>
            <h3>
                <span className='font-semibold'>
                    Общее обслуживание клиентов:
                </span>{' '}
                203-386-5302
            </h3>
        </div>
    );
};

interface InputCompProps {
    type: string;
    placeholder: string;
}

const InputComp = (props: InputCompProps) => {
    return (
        <input
            {...props}
            required={true}
            className='w-full rounded border border-gray-300 p-4 outline-none transition hover:border-gray-500 focus:border-indigo-500 md:p-6'
        />
    );
};

const ContactUs = () => {
    const [helpType, setHelpType] = useState('');

    const handleHelpChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setHelpType(e.target.value);
    };

    return (
        <div className='mb-12 px-4 md:p-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-between gap-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col justify-around gap-4 lg:gap-0'>
                        <div>
                            <h1 className='mb-4 text-2xl font-medium md:text-6xl'>
                                Свяжитесь с нами.
                            </h1>
                            <p className='text-lg'>
                                Наша дверь всегда открыта! Свяжитесь с нами, и
                                наши команда свяжется с вами в ближайшее время.
                            </p>
                        </div>
                        <ContactInfoCard />
                        <CustomerSupportCard />
                    </div>
                    <form className='flex flex-1 flex-col items-stretch gap-2 border p-5 text-base text-gray-500 md:px-[40px] md:py-[48px] md:text-lg lg:items-start '>
                        <h2 className='text-xl text-gray-800 md:text-3xl'>
                            Как мы можем вам помочь?
                        </h2>
                        <p className='text-gray-600'>
                            Свяжитесь с нами для получения дополнительной
                            информации.
                        </p>
                        <select
                            value={helpType}
                            onChange={handleHelpChange}
                            className='block w-full rounded border border-gray-300 bg-white p-4 font-primary outline-none transition hover:border-gray-500 focus:border-indigo-500 md:p-6 '
                        >
                            <option disabled>Как мы можем вам помочь? *</option>
                            <option className='font-primary'>
                                Обслуживание клиентов
                            </option>
                            <option>Мне нужна помощь в поиске дома</option>
                            <option>Другое</option>
                        </select>
                        {helpType === 'Другое' && (
                            <textarea
                                className='w-full resize-none rounded border border-gray-300 bg-white p-4 outline-none transition hover:border-gray-500 focus:border-indigo-500 md:p-6'
                                placeholder='Пожалуйста, опишите вашу проблему'
                            ></textarea>
                        )}
                        <div className='flex w-full flex-col gap-x-1 gap-y-2 md:flex-row'>
                            <InputComp type='text' placeholder='Имя *' />
                            <InputComp type='text' placeholder='Фамилия *' />
                        </div>
                        <InputComp
                            type='email'
                            placeholder='Адрес электронной почты *'
                        />
                        <InputComp type='tel' placeholder='Номер телефона *' />
                        <div className='flex w-full flex-col gap-x-1 gap-y-2 md:flex-row'>
                            <InputComp type='text' placeholder='Имя компании' />
                            <InputComp
                                type='email'
                                placeholder='Вебсайт компании'
                            />
                        </div>
                        <button
                            type='button'
                            className='rounded bg-violet-700 px-4 py-3 text-white transition hover:bg-violet-800'
                        >
                            Подвердить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
