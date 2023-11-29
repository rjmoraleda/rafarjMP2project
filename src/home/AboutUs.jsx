import React from "react";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc = "Free Courses and 24/7 support, Discounts awaits for Bulk Buy and be one of our Top Rated Resellers.";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Merchant Enrolled',
},
{
iconName: 'icofont-live-support',
count: '150',
text: '24/7 Live Support',
},
{
iconName: 'icofont-sale-discount',
count: '100',
text: 'Rewards and Discounts',
},
];

const AboutUs = () => {
  return <div className="instructor-section style-2 padding-tb section-bg-ash">
          <div className="container">
            <div className="section-wrapper">
              <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2
              row-cols-xl-3 ">
                <div className="col">
                  {
                    countList.map((val, i) => (
                        <div key={i} className="count-item">
                          <div className="count-inner">
                            <div className="count-icon">
                                  <i className={val.iconName}></i>
                            </div>
                                <div className="count-content">
                                    <h2>
                                      <span className="count"><CountUp end={val.count} /></span>
                                      <span>+</span>
                                      </h2>
                                      <p>{val.text}</p>
                                </div>
                          </div>
                        </div>
                    ))
                  }

                </div>

                <div className="col">
                  <div className="instructor-content">
                    <p className="subtitle">{subTitle}</p>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                    <Link to="/sign-up" className="lab-btn">{btnText}</Link>
                  </div>

                </div>
                <div className="col">
                  <div className="instructor-thumb">
                    <img src="/src/assets/images/instructor/01.png" alt="" />
                  </div>

                </div>
              </div>

            </div>

          </div>
  </div>
    
  
};

export default AboutUs