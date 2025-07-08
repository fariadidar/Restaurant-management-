import React from 'react'
import About from '../Components/About'
import Reservation from '../Components/Reservation'
import ProductCard from '../Components/ProductCard'
import HeroBanner from '../Components/heroBanner'
import Products from '../Components/products'


const Home = () => {
  return (
    <div className='w-full'>
      <HeroBanner />
      <Reservation />
      <Products />
      <About/>
    </div>
  )
}

export default Home
