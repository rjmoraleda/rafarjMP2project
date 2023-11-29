import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShow from './CategoryShow'
import Register from './Register'
import Locations from './Locations'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsors from './Sponsors'

const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShow/>
        <Register/>
        <Locations/>
        <AboutUs/>
        <AppSection/>
        <Sponsors/>
    </div>
  )
}

export default Home