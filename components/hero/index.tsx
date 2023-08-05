import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/mainPhoto-hero.png";
import PlaceOrderForHome from "../placeOrder/placeOrderForHome";
const Hero = () => {

  return (
    <div className="hero">
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
      <PlaceOrderForHome/>
    </div>
  );
};

export default Hero;
