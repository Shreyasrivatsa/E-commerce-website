import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollection from '../Components/NewCollections/Newcollection';
import NewsLetter from '../Components/Newsletter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <Newcollection></Newcollection>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop;

