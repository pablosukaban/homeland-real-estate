import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import {
    RiArrowDownSLine,
    RiArrowUpSLine,
    RiWallet3Line,
} from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { houseSlice } from '../store/houseSlice';

const PriceRangeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { price, prices } = useAppSelector((state) => state.house);
    const { changePrice } = houseSlice.actions;
    const dispatch = useAppDispatch();

    const handleBtnClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handlePropertyClick = (p: string) => {
        dispatch(changePrice(p));
    };

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                className='dropdown-btn w-full text-left'
                onClick={handleBtnClick}
            >
                <RiWallet3Line className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>
                        {price}
                    </div>
                    <div className='text-[13px]'>Choose Price Range</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {prices.map((p, idx) => (
                    <Menu.Item
                        className='cursor-pointer transition hover:text-violet-700'
                        as='li'
                        key={idx}
                        onClick={() => handlePropertyClick(p)}
                    >
                        {p}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

export default PriceRangeDropdown;
