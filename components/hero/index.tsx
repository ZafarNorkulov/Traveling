import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/landingHero.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrap">
        <Image src={heroImage} className="hero-img object-cover" alt="" />
        <div className="myContainer flex justify-center items-center">
          <div className="hero-text flex justify-venter flex-col items-center mt-[50px]">
            <h3 className="text-[45px] font-bold font-TradeGothic text-white max-h-[57px]">
              Helping Others
            </h3>
            <h2 className="text-[80px] font-bold font-TradeGothic text-white max-h-[100px] mt-1">
              Live & Travel
            </h2>
            <p className="hero-desc max-h-[24px] mt-3">Special offers to suit your plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
