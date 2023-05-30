/* eslint-disable no-undef */
import React from 'react';
import './pagination.css';

const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage,}) => {
    let pages = [];

    // eslint-disable-next-line no-undef
    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i)
    }

  return (
    <div className="pagination ">
        {pages.map((page,index) =>{
            return <button  key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>{page}</button>
        })}
    </div>
  )
}

export default Pagination