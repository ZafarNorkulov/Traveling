import React, { useState } from "react";
import ComponentsHead from "../helperComponents/componentsHead";
import Image from "next/image";

const TravelList = ({ datas }: { datas: any[] }) => {

  

  return (
    <div className="">
      <ComponentsHead
        title="Plan your perfect trip"
        desc="Search Flights & Places Hire to our most popular destinations"
        btnText="See more places"
      />
      <div className="grid grid-cols-12 gap-8">
        {datas?.map((item, index) => (
          <div
            className="travel-card lg:col-span-4 sm:col-span-6 col-span-12 flex items-center gap-4 rounded-2xl  p-4 bg-white"
            key={index}
          >
            <Image
              src={item?.img}
              className="max-w-[90px] max-h-[90px] rounded-xl"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h5 className="text-base font-semibold opacity-70 font-Montserrat">
                {item?.title}
              </h5>
              <p className="text-sm font-medium">{item?.skills.join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TravelList;
