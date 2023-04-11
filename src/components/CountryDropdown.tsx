import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { houseSlice } from '../store/houseSlice';

const CountryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { countries, country } = useAppSelector((state) => state.house);
    const { changeCountry } = houseSlice.actions;
    const dispatch = useAppDispatch();

    const handleBtnClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleCountryClick = (c: string) => {
        dispatch(changeCountry(c));
    };

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                className='dropdown-btn w-full text-left'
                onClick={handleBtnClick}
            >
                <RiMapPinLine className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>
                        {country}
                    </div>
                    <div className='text-[13px]'>Выберите место</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {countries.map((c, idx) => (
                    <Menu.Item
                        className='cursor-pointer transition hover:text-violet-700'
                        as='li'
                        key={idx}
                        onClick={() => handleCountryClick(c)}
                    >
                        {c}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

export default CountryDropdown;
