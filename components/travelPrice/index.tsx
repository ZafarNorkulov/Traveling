import { Button } from "antd";
import React from "react";
import ComponentsHead from "../helperComponents/componentsHead";

const TravelPrice = () => {
  return (
    <div className="travel-price mt-[80px]">
      <div className="myContainer ">
        <ComponentsHead
          title="Fall into travel"
          desc=" Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination."
          btnText="See All"
        />
        <div className="grid grid-cols-12 lg:gap-x-3 gap-x-5 lg:gap-y-0 gap-y-5">
          <div className=" lg:col-span-3 sm:col-span-6 col-span-12 travel-price-card bg-cover md:bg-center bg-top  xl:h-[420px] lg:h-[340px] md:h-[500px] sm:h-[400px] h-[450px] flex flex-col justify-end p-4">
            <div className="flex justify-between items-end w-100 mb-3">
              <div>
                <h4 className="city-name text-white  xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 font-semibold">
                  Melbourne
                </h4>
                <span className="city-desc text-sm text-white font-normal">
                  An amazing journey
                </span>
              </div>
              <h5 className="city-price xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 text-white">
                $ 700
              </h5>
            </div>
            <Button className="w-100 main-btn" size="large">
              Book Flight
            </Button>
          </div>
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 travel-price-card bg-cover md:bg-center bg-top  xl:h-[420px] lg:h-[340px] md:h-[500px] sm:h-[400px] h-[450px] flex flex-col justify-end p-4">
            <div className="flex justify-between items-end w-100 mb-3">
              <div>
                <h4 className="city-name text-white  xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 font-semibold">
                  Paris
                </h4>
                <span className="city-desc xl:text-sm lg:text-xs md:text-lg text-white font-normal">
                  A Paris Adventure
                </span>
              </div>
              <h5 className="city-price xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 text-white">
                $ 600
              </h5>
            </div>
            <Button className="w-100 main-btn" size="large">
              Book Flight
            </Button>
          </div>
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 travel-price-card bg-cover md:bg-center bg-top  xl:h-[420px] lg:h-[340px] md:h-[500px] sm:h-[400px] h-[450px] flex flex-col justify-end p-4">
            <div className="flex justify-between items-end w-100 mb-3">
              <div>
                <h4 className="city-name text-white  xl:text-2xl lg:text-xs md:text-3xl text-2xl mb-0 font-semibold">
                  London
                </h4>
                <span className="city-desc text-sm text-white font-normal">
                  London eye adventure
                </span>
              </div>
              <h5 className="city-price xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 text-white">
                $ 350
              </h5>
            </div>
            <Button className="w-100 main-btn" size="large">
              Book Flight
            </Button>
          </div>
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 travel-price-card bg-cover md:bg-center bg-top  xl:h-[420px] lg:h-[340px] md:h-[500px] sm:h-[400px] h-[450px] flex flex-col justify-end p-4">
            <div className="flex justify-between items-end w-100 mb-3">
              <div>
                <h4 className="city-name text-white  xl:text-2xl lg:text-xs md:text-3xl text-2xl mb-0 font-semibold">
                  Columbia
                </h4>
                <span className="city-desc text-sm text-white font-normal">
                  Amazing streets
                </span>
              </div>
              <h5 className="city-price xl:text-2xl lg:text-lg md:text-3xl text-2xl mb-0 text-white">
                $ 700
              </h5>
            </div>
            <Button className="w-100 main-btn" size="large">
              Book Flight
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPrice;
