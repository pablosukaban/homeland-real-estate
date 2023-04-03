import React from 'react';
import { useAppSelector } from '../hooks/redux';
import House from './House';
import { Link } from 'react-router-dom';
import usePagination from '../hooks/usePagination';

const HouseList = () => {
    const { filteredHouses } = useAppSelector((state) => state.house);

    const paginationProps = {
        itemsPerPage: 6,
        totalItems: filteredHouses.length,
    };

    const { currentItems, setCurrentPage, currentPage } = usePagination(
        filteredHouses,
        paginationProps
    );

    const totalPagesNumber = Math.ceil(
        filteredHouses.length / paginationProps.itemsPerPage
    );

    const totalPages = Array.from(
        { length: totalPagesNumber },
        (_, i) => i + 1
    );

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (currentItems.length < 1) {
        return (
            <div className='mt-48 text-center text-3xl text-gray-400'>
                Sorry, nothing found
            </div>
        );
    }

    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-14'>
                    {currentItems.map((item) => (
                        <Link to={`/property/${item.id}`} key={item.id}>
                            <House houseObj={item} />
                        </Link>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-4'>
                    {totalPages.length > 1 &&
                        totalPages.map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                disabled={page === currentPage}
                                className={`border px-5 py-3 text-lg text-violet-500 ${
                                    page === currentPage
                                        ? 'border-violet-500'
                                        : ''
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HouseList;
