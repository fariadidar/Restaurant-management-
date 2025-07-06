import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import Reservation from '../Components/Reservation'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroBanner />
      <Reservation />
      <ProductCard />
    </div>
  )
}

export default Home
