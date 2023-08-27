import { Button } from "antd";
import React from "react";
import about1 from "../../public/images/about1.png"
import about2 from "../../public/images/about2.png"
import about3 from "../../public/images/about3.png"
import about4 from "../../public/images/about4.png"
import Image from "next/image";
import Link from "next/link";
import ComponentsHead from "../helperComponents/componentsHead";
const LocationAbout = () => {
  return (
    <div className="location-about mt-[80px] ">
      <div className="myContainer ">
        <ComponentsHead title="Fall into travel" desc=" Going somewhere to celebrate this season? Whether you are going home or somewhere to roam, we have got the travel tools to get you to your destination." btnText="See All"/>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-5 col-span-12 sm:mt-0 mt-3 flex flex-col justify-between p-6 bg-[#8DD3BB] rounded-[20px]">
            <div>
            <div className="flex justify-between ">
            <h2 className="city xl:max-w-[363px] md:max-w-[270px] max-w-[200px] xl:text-[40px] md:text-3xl text-2xl  font-bold text-[#121]">Backpacking Sri Lanka</h2>       
            <div className="price-card w-[70px] text-center max-h-[65px] rounded-lg flex flex-col p-2 bg-white">
              <span>From</span>
              <h4 className="mt-1 font-semibold">$700</h4>
            </div>
            </div>
            <p className="text-sm font-normal mt-6">
              Traveling is a unique experience as it is the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
            </p>
            </div>
          <Button size="large" className="bg-white w-full text-sm font-medium lg:mt-0 mt-24">Book Flight</Button>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="grid grid-cols-12 md:gap-6 gap-3">
              <div className="col-span-6">
              <Image src={about1} className="w-full max-h-[200px]" alt="" />
              </div>
              <div className="col-span-6">
              <Image src={about2} className="w-full max-h-[200px]" alt="" />
            </div>
            </div>
            <div className="grid grid-cols-12 md:gap-6 gap-3 md:mt-6 mt-3">
              <div className="col-span-6">
              <Image src={about3} className="w-full max-h-[200px]" alt="" />
              </div>
              <div className="col-span-6">
              <Image src={about4} className="w-full max-h-[200px]" alt="" />
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAbout;
