import { Breadcrumb, Checkbox, Form } from "antd";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import hero from "../../public/images/flight-detail-hero.png";
import itemPhoto1 from "../../public/images/flight-detail-item.png";
import itemPhoto2 from "../../public/images/flight-detail-item(2).png";
import itemPhoto3 from "../../public/images/flight-detail-item(3).png";
import itemPhoto4 from "../../public/images/flight-detail-item(4).png";
import itemPhoto5 from "../../public/images/flight-detail-item(5).png";
import EvolutionCard from "../helperComponents/evolutionCard";


const FlightDetailHero = () => {
  return (
    <div >
      <Breadcrumb
        className="text-[#121] opacity-75"
        items={[
          { title: "Turkey" },
          { title: "Istanbul" },
          { title: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <div className="flex md:flex-row flex-col justify-between my-8 relative gap-6">
        <div className="flex flex-col gap-y-2">
          <h2 className="md:text-2xl text-lg text-[#121] font-bold ">
            Emirates A380 Airbus
          </h2>
          <div className="flex sm:items-center items-start md:mt-2 opacity-75]">
            <IoLocation />{" "}
            <span className="max-w-[365px] text-base opacity-75">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
          </div>
          <div className="flex items-center gap-x-2">
            <EvolutionCard>4.2</EvolutionCard>
            
            <p className="text-xs font-medium">
              <span className="font-bold">Very Good</span> 54 reviews
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-end ">
          <h3 className="md:text-[32px] text-2xl text-[#FF8682] font-bold md:static absolute top-0 right-0">$240</h3>
          <div className="flex gap-x-4 justify-end">
            <strong className="p-2 border border-[#8dd3bb] rounded-[4px]">
              <AiOutlineHeart className="text-xl" />
            </strong>
            <strong className="p-2 border border-[#8dd3bb] rounded-[4px]">
              <BiSolidShareAlt className="text-xl " />
            </strong>
            <button className="p-2 w-[150px] bg-[#8dd3bb] rounded-[4px]">
              Book now
            </button>
          </div>
        </div>
      </div>
      <Image src={hero} className="w-full" alt="" />
      <div className="mt-12 flex md:flex-row flex-col items-center justify-between">
        <h4 className="md:text-2xl text-xl font-bold">Basic Economy Features</h4>
        <Form className="sort-by-flight-detail">
          <Checkbox defaultChecked>Economy</Checkbox>
          <Checkbox>First Class</Checkbox>
          <Checkbox>Busines Class</Checkbox>
        </Form>
      </div>
      <div
      
        className="mySwiper hidden  justify-between items-center gap-6"
      >
        <Image src={itemPhoto1} alt="" />
        <Image src={itemPhoto2} alt="" />
        <Image src={itemPhoto3} alt="" />
        <Image src={itemPhoto4} alt="" />
        <Image src={itemPhoto5} alt="" />
        <Image src={itemPhoto1} alt="" />
        <Image src={itemPhoto2} alt="" />
        <Image src={itemPhoto3} alt="" />
        <Image src={itemPhoto4} alt="" />
       
      </div>
      <div className="p-4 bg-[#8dd3bb99] rounded-lg mt-10 flex flex-col gap-y-4">
        <h4 className="text-2xl text-[#121] font-bold">Emirates Airlines Policies</h4>
 <div className="flex gap-4 sm:flex-row flex-col">
 <div className="flex gap-x-4 sm:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75C11.25 13.1642 11.5858 13.5 12 13.5Z"
              fill="#112211"
            />
            <path
              d="M13.125 3.82031V3.375C13.125 3.07663 13.0065 2.79048 12.7955 2.5795C12.5845 2.36853 12.2984 2.25 12 2.25C11.7016 2.25 11.4155 2.36853 11.2045 2.5795C10.9935 2.79048 10.875 3.07663 10.875 3.375V3.82031C9.45433 3.99866 8.09716 4.51513 6.91735 5.32641L6.42188 4.82812C6.21053 4.61678 5.92389 4.49805 5.625 4.49805C5.32612 4.49805 5.03947 4.61678 4.82813 4.82812C4.61678 5.03947 4.49805 5.32611 4.49805 5.625C4.49805 5.92389 4.61678 6.21053 4.82813 6.42188L5.23125 6.825C3.79135 8.46272 2.99805 10.5693 3 12.75C3 17.7127 7.03735 21.75 12 21.75C16.9627 21.75 21 17.7127 21 12.75C21 8.16844 17.5584 4.37531 13.125 3.82031ZM12 15C11.4694 14.9998 10.9558 14.8121 10.5502 14.4701C10.1445 14.128 9.87279 13.6535 9.78305 13.1305C9.69331 12.6075 9.79131 12.0696 10.0597 11.6118C10.3282 11.1541 10.7498 10.8059 11.25 10.6289V7.125C11.25 6.92609 11.329 6.73532 11.4697 6.59467C11.6103 6.45402 11.8011 6.375 12 6.375C12.1989 6.375 12.3897 6.45402 12.5303 6.59467C12.671 6.73532 12.75 6.92609 12.75 7.125V10.6289C13.2503 10.8059 13.6718 11.1541 13.9403 11.6118C14.2087 12.0696 14.3067 12.6075 14.217 13.1305C14.1272 13.6535 13.8555 14.128 13.4498 14.4701C13.0442 14.8121 12.5307 14.9998 12 15Z"
              fill="#112211"
            />
          </svg>
          <p className="text-base text-[#121] opacity-75 font-medium">Pre-flight cleaning, installation of cabin HEPA filters.</p>
        </div>
        <div className="flex gap-x-4 sm:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75C11.25 13.1642 11.5858 13.5 12 13.5Z"
              fill="#112211"
            />
            <path
              d="M13.125 3.82031V3.375C13.125 3.07663 13.0065 2.79048 12.7955 2.5795C12.5845 2.36853 12.2984 2.25 12 2.25C11.7016 2.25 11.4155 2.36853 11.2045 2.5795C10.9935 2.79048 10.875 3.07663 10.875 3.375V3.82031C9.45433 3.99866 8.09716 4.51513 6.91735 5.32641L6.42188 4.82812C6.21053 4.61678 5.92389 4.49805 5.625 4.49805C5.32612 4.49805 5.03947 4.61678 4.82813 4.82812C4.61678 5.03947 4.49805 5.32611 4.49805 5.625C4.49805 5.92389 4.61678 6.21053 4.82813 6.42188L5.23125 6.825C3.79135 8.46272 2.99805 10.5693 3 12.75C3 17.7127 7.03735 21.75 12 21.75C16.9627 21.75 21 17.7127 21 12.75C21 8.16844 17.5584 4.37531 13.125 3.82031ZM12 15C11.4694 14.9998 10.9558 14.8121 10.5502 14.4701C10.1445 14.128 9.87279 13.6535 9.78305 13.1305C9.69331 12.6075 9.79131 12.0696 10.0597 11.6118C10.3282 11.1541 10.7498 10.8059 11.25 10.6289V7.125C11.25 6.92609 11.329 6.73532 11.4697 6.59467C11.6103 6.45402 11.8011 6.375 12 6.375C12.1989 6.375 12.3897 6.45402 12.5303 6.59467C12.671 6.73532 12.75 6.92609 12.75 7.125V10.6289C13.2503 10.8059 13.6718 11.1541 13.9403 11.6118C14.2087 12.0696 14.3067 12.6075 14.217 13.1305C14.1272 13.6535 13.8555 14.128 13.4498 14.4701C13.0442 14.8121 12.5307 14.9998 12 15Z"
              fill="#112211"
            />
          </svg>
          <p className="text-base text-[#121] opacity-75 font-medium">Pre-flight cleaning, installation of cabin HEPA filters.</p>
        </div>
 </div>
      </div>
    </div>
  );
};

export default FlightDetailHero;
