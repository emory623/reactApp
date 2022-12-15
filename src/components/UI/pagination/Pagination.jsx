import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className='page__wrapper'>
        {pagesArray.map(el => 
          <span 
            onClick={() => changePage(el)}
            key={el} 
            className={page === el ? 'page__current page' : 'page'}
          >
            {el}
          </span>
        )}
      </div>
    );
};

export default Pagination;