import React from 'react'
import { Link } from 'react-router-dom';
const btnText = "Sign up for Free"
const title = "Shop Anytime, Resell Anywhere"
const desc = "All you need is a phone and email to start earning while shopping! Just Sign Up and our Representative will get in touch with you in a minute."

const AppSection = () => {
  return <div className='app-section padding-tb'>
    <div className='container'>
        <div className='section-header text-center'>
            <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>
        </div>

            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
                </ul>
            </div>
    </div>
  </div>
    
  
}

export default AppSection