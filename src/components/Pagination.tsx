import React from 'react';
import { PaginationProps } from '../Types/Types';

const Pagination: React.FC<PaginationProps> = ({ CurrentPage, totalPages, onPageChange }) => {


    const getPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];

        // Show all pages if total pages are less than or equal to 5
        if (totalPages <= 5) {

            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show first page
            pages.push(1);

            // Show dots if current page is greater than 3
            if (CurrentPage > 3) {
                pages.push('...');
            }

            // Show the Previous page before the current page
            if (CurrentPage > 2 && CurrentPage !== 1) {
                pages.push(CurrentPage - 1);
            }

            if (CurrentPage !== 1 && CurrentPage !== totalPages) {
                pages.push(CurrentPage);
            }

            if (CurrentPage < totalPages - 1 && CurrentPage !== totalPages) {
                pages.push(CurrentPage + 1);
            }

            // Show dots if current page is less than totalPages - 2
            if (CurrentPage < totalPages - 2) {
                pages.push('...');
            }

            // Show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex justify-center items-center mb-8 mt-20">
            <ul className="flex border border-gray-300 rounded overflow-hidden">
                
                <li className={`border-r border-gray-300 ${CurrentPage === 1 &&'pointer-events-none'}`}>
                    <button
                        className="px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                        onClick={() => onPageChange(CurrentPage - 1)}
                        disabled={CurrentPage === 1}
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                </li>

                {pageNumbers.map((number, index) => (
                    <li key={index} className="border-r border-gray-300">
                        {number === '...' ? (
                            <span className="px-2 py-1 md:px-3 md:py-2 text-gray-500 align-middle ">...</span>
                        ) : (
                            <button
                                onClick={() => onPageChange(number as number)}
                                className={`px-2 py-1 md:px-3 md:py-2 ${CurrentPage === number ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
                            >
                                {number}
                            </button>
                        )}
                    </li>
                ))}

                <li className={`border-r border-gray-300 ${CurrentPage === totalPages && 'pointer-events-none'}`}>
                    <button
                        className="px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                        onClick={() => onPageChange(CurrentPage + 1)}
                        disabled={CurrentPage === totalPages}
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
