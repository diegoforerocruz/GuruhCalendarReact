import React from 'react';

const Pagination = ({postPerpage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(totalPosts/postPerpage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pagination-lg">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;