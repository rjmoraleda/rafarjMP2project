import React from 'react';
import { Link } from 'react-router-dom'; 
import './pageheader.css';

const PageHeader = ({title, curPage}) => {
  return (
    <div className="pageheader-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='pageheader-content text-center'>
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb justify-content-center">
                            <ol>
                                <li className='breadcrumb-item'><Link to= "/">Home</Link></li>
                                <li className='breadcrumb-item active' aria-current="page">{curPage}</li>
                            </ol>
                        </nav>

                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default PageHeader