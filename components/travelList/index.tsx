import React, { useState } from "react";
import ComponentsHead from "../helperComponents/componentsHead";
import firstPhoto from "../../public/images/London.png";
import secondPhoto from "../../public/images/Paris.png";
import thirdPhoto from "../../public/images/HotelPhotofirst.png";
import fourthPhoto from "../../public/images/Melbourne.png";
import Image from "next/image";
import flight from "../../public/images/flight-landing.png";
import hotel from "../../public/images/hotel-landing.png";
import { BsSendFill } from "react-icons/bs";

const TravelList = () => {
  const [datas, setDatas] = useState([
    {
      title: "Istanbul, Turkey",
      skills: ["Flights", "Hotels", "Resorts"],
      img: firstPhoto,
    },
    {
      title: "Sydney, Australia",
      skills: ["Flights", "Hotels", "Resorts"],
      img: secondPhoto,
    },
    {
      title: "Baku, Azerbaijan",
      skills: ["Flights", "Hotels", "Resorts"],
      img: thirdPhoto,
    },
    {
      title: "Malé, Maldives",
      skills: ["Flights", "Hotels", "Resorts"],
      img: fourthPhoto,
    },
  ]);
  const [pages, setPages] = useState([
    {
      title: "Flights",
      desc: "Search Flights & Places Hire to our most popular destinations",
      img: flight,
      btnText: (
        <span className="flex items-center gap-1">
          <BsSendFill />
          Show Filghts
        </span>
      ),
    },
    {
      title: "Hotels",
      desc: "Search hotels & Places Hire to our most popular destinations",
      img: hotel,
      btnText: (
        <span className="flex items-center gap-1">
          <BsSendFill />
          Show Hotels
        </span>
      ),
    },
  ]);

  return (
    <div className="myContainer ">
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
      <div className="grid grid-cols-12 gap-6 mt-16">
        {pages?.map((item, index) => (
          <div className="md:col-span-6 col-span-12 relative " key={index}>
            <Image src={item?.img} className="object-cover" alt="" />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center p-6 rounded-bl-[20px] rounded-br-[20px] shadow-img">
              <h3 className="text-[40px] font-bold text-white font-TradeGothic">
               { item?.title}
              </h3>
              <p className="text-base font-Montserrat text-white max-w-[400px] text-center">
               {item?.desc}
              </p>
              <button className="px-4 py-4 bg-[#8dd3bb] rounded-[4px] mt-4 ">
                {item?.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelList;
