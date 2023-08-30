import Image from 'next/image'
import React from 'react'
import PlaceOrderForGuest from '../placeOrder/placeOrderForGuest'
import heroImage from "../../public/images/hotel-hero.png"
const HotelHero = () => {
  return (
    <div className='hero md:h-[90vh]'>
      <div className="hero-wrap">
        <Image src={heroImage} className="hero-img" alt="" />
        <div className="myContainer">
          <div className="hero-text ml-6">
            <h3 className="hero-title">
              Make your travel whishlist, we’ll do the rest
            </h3>
            <p className="hero-desc">Special offers to suit your plan</p>
          </div>
        </div>
      </div>
      <PlaceOrderForGuest/>
    </div>
  )
}

export default HotelHero
