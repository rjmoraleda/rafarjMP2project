import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResult = "Showing 01-12 of 139 Results"
import data from "../products.json"
import ProductsCards from './ProductsCards'
import Paging from './Paging'

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setproducts] = useState(data);

    //pages
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 10;
    
    const indexOfLastProduct = currentPage + productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //function of pages
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

  return (
    <div>
        <PageHeader title="Our Shop Page" curPage="Shop"/>
        {/*page*/}
        <div className='shop-page padding-tb'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className=' col-lg-8 col-12'>
                        <article>
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p>{showResult}</p>
                                <div className={`product-view-mode $GridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-ghost'></i>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <ProductsCards GridList={GridList} products={products}/>
                            </div>
                            <Paging
                                productPerPage={productPerPage}
                                totalProducts = {products.length}
                                paginate = {paginate}
                                activePage={currentPage}
                            />
                        </article>
                    </div>
                    <div className=' col-lg-4 col-12'>
                        right side
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Shop