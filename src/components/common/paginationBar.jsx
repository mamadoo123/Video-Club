import React from 'react';
import _ from 'lodash';

const PaginationBar = (props) => {
    const {numberOfItems, pageSize, onPageChange, currentPage} = props;
    const numberOfPages = Math.ceil(numberOfItems / pageSize);
    if(numberOfPages === 1) return null;
    const pagesArray = _.range(1, numberOfPages + 1);
    
    return ( 
        <nav>
         <ul className="pagination pagination-lg">
            {pagesArray.map( page => (
              <li className= {page === currentPage ? 'page-item active': 'page-item'} key={page}>
                <a className="page-link" onClick = {() => onPageChange(page)}>{page}</a>
              </li>
            ))}
         </ul>
        </nav>
     );
}
 
export default PaginationBar;