import React, {  useState } from "react";
import { PiPlusCircleThin } from "react-icons/pi";
import { IoTrashBin } from "react-icons/io5";
import AddCardModal from "../addCardModal";


const PaymentMethods = () => {
  const [openModalStatus,setOpenModalStatus] = useState(false);



  return (
    <div>
      <h2 className="text-[32px] font-bold mb-4">Payment methods</h2>
      <div className="grid grid-cols-12 bg-white rounded-3xl shadow-md p-6 gap-6 ">
        <div className="lg:col-span-4 sm:col-span-6 col-span-10 row-span-1 bg-[#8dd3bb] rounded-2xl p-4">
          <div className="flex flex-col gap-y-[57px]">
            <div className="flex justify-between gap-x-4">
              <div className="flex flex-col">
                <h5 className="text-2xl">**** **** ****</h5>
                <h4 className="text-[32px] font-semibold -my-[10px]">4321</h4>
              </div>
              <IoTrashBin className="text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col">
                <span>Valid Thru</span>
                <h5>02/27</h5>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="34"
                viewBox="0 0 52 34"
                fill="none"
              >
                <path
                  d="M2.29751 0.993103C1.15398 0.993103 0.226562 1.92026 0.226562 3.06405V31.436C0.226562 32.5797 1.15445 33.5069 2.29751 33.5069H49.9292C51.0727 33.5069 52.0001 32.5798 52.0001 31.436V3.06405C52.0001 1.92032 51.0723 0.993103 49.9292 0.993103H2.29751ZM31.1483 10.6828C32.4084 10.6828 33.4182 10.9612 34.0622 11.22L33.6221 13.9883L33.3309 13.841C32.731 13.5822 31.9605 13.3331 30.8975 13.3508C29.6252 13.3508 29.037 13.9184 29.037 14.4494C29.0296 15.0478 29.7243 15.4424 30.8603 16.0333C32.7354 16.9451 33.602 18.0505 33.5898 19.5038C33.5646 22.1555 31.3468 23.869 27.9303 23.869C26.4727 23.8529 25.0685 23.5443 24.3094 23.1878L24.7656 20.3273L25.1847 20.5312C26.2521 21.0081 26.9433 21.201 28.2441 21.201C29.1783 21.201 30.1809 20.8099 30.1889 19.9536C30.195 19.3944 29.7698 18.9958 28.5046 18.3696C27.2718 17.7585 25.6374 16.7348 25.6555 14.8992C25.6748 12.4161 27.9368 10.6828 31.1483 10.6828ZM4.80526 11.089H10.0522C10.7588 11.1157 11.3292 11.3432 11.5261 12.1099L12.6571 17.9473C12.6572 17.9479 12.6569 17.95 12.6571 17.9506L12.9968 19.6996L16.1825 11.089H19.6287L14.5063 23.6926L11.0634 23.6958L8.32266 13.5255C9.95342 14.3895 11.3418 15.3891 12.1458 16.7646C11.9385 16.3294 11.6654 15.838 11.3158 15.3538C10.9088 14.7899 10.0297 14.0618 9.6623 13.752C8.38194 12.6727 6.64312 11.801 4.76483 11.3397L4.80526 11.089ZM20.9991 11.1035H24.3693L22.261 23.6877H18.8909L20.9991 11.1035ZM40.034 11.1035H42.5871L45.2599 23.6877H42.1955C42.1955 23.6877 41.8915 22.242 41.7927 21.8012C41.311 21.8012 37.9424 21.7964 37.5634 21.7964C37.4352 22.1371 36.8677 23.6877 36.8677 23.6877H33.4005L38.3044 12.1487C38.6516 11.3287 39.2434 11.1035 40.034 11.1035ZM40.2848 14.4882C40.1189 14.9563 39.8302 15.7122 39.8495 15.679C39.8495 15.679 38.8121 18.4458 38.5407 19.164L41.2668 19.1624C41.0136 17.9624 40.7601 16.7625 40.5064 15.5626L40.2848 14.4883V14.4882Z"
                  fill="#112211"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 cursor-pointer sm:col-span-6 col-span-10 border-dashed hover:bg-[#effdf9ad] border-2 h-[212px] rounded-2xl border- border-[#8dd3bb] flex flex-col justify-center items-center" onClick={()=>setOpenModalStatus(true)}>
          <PiPlusCircleThin className="text-[64px] fill-[#8dd3bb]" />
          <span className="mt-[10px] opacity-75 text-[#121] text-xs">
            Add a new card
          </span>
        </div>
      </div>
     <AddCardModal modalStatus={openModalStatus} setOpenModalStatus={setOpenModalStatus}/>
    </div>
  );
};

export default PaymentMethods;
