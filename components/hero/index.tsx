import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/landingHero.png";
import PlaceOrderForHome from "../placeOrder/placeOrderForHome";
const Hero = () => {
  return (
    <div className="hero myContainer mt-5 h-[100vh]">
      <div className="hero-wrap">
        <Image src={heroImage} className="w-full max-h-[600px] md:min-h-max min-h-[300px] object-cover object-center rounded-3xl" alt="" />
        <div className="myContainer flex justify-center items-center">
          <div className="hero-text flex justify-venter flex-col items-center mt-[50px]">
            <h3 className="lg:text-[45px] md:text-[32px] sm:text-2xl text-lg font-bold font-TradeGothic text-white max-h-[57px]">
              Helping Others
            </h3>
            <h2 className="lg:text-[80px] md:text-[60px] sm:text-5xl text-3xl font-bold font-TradeGothic text-white max-h-[100px] mt-1">
              Live & Travel
            </h2>
            <p className="hero-desc max-h-[24px] mt-3">Special offers to suit your plan</p>
          </div>
        </div>
      </div>
      <PlaceOrderForHome/>
    </div>
  );
};

export default Hero;
