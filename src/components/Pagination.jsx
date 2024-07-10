import React, { useContext } from 'react';
import { AppContext } from '../appContexts/appContext';

const Pagination = () => {
    const { posts, currentPage, postsPerPage, setCurrentPage } = useContext(AppContext);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-4">
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
            >
                Previous
            </button>
            {pageNumbers.map(number => (
                <button 
                    key={number} 
                    onClick={() => setCurrentPage(number)} 
                    className={`mx-1 px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
                >
                    {number}
                </button>
            ))}
            <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === pageNumbers.length}
                className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
