import { useState } from 'react';

type UsePaging<T> = {
    currentPage: number;
    totalPages: number;
    currentData: T[];
    nextPage: () => void;
    prevPage: () => void;
    setCurrentPage: (currentPage: number) => void;
    handleSetPage: (page: number) => void;
};

function usePaging<T>(data: T[], itemsPerPage: number): UsePaging<T> {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleSetPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return {
        currentPage,
        totalPages,
        currentData,
        setCurrentPage,
        nextPage,
        prevPage,
        handleSetPage,
    };
}

export default usePaging;
