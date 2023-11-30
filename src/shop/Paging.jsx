import React from 'react'

const Paging = (productPerPage, totalProducts, paginate, activePage) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumber.push(i)
    }
  return (
    <ul className='default-pagination lab-ul'>
        {
            pageNumber.map((number) => (
                <li key={number} className={`page-item ${number ===activePage ? "bg-warning" : ""}`}>
                    <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                </li>
            ))
        }
    </ul>
  )
}

export default Paging