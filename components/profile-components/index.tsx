import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileMainPhoto from "../../public/images/Rectangle 3.png";
import { BsCloudUploadFill } from "react-icons/bs";
import avatarPhoto from "../../public/images/avatar.jpeg";
import { Divider, message } from "antd";
import UserMe from "./user-me";
import TicketBookings from "./ticketBookings";
import PaymentMethods from "./paymentMethods";
import { useRouter } from "next/router";
import useGetData from "../../custom-hooks/getData";
import { IUser } from "../../types/user.type";

const ProfileComponent = () => {
  const [activeMainTab, setActiveMainTab] = useState<number>(0);
  const [mainTabs, setMainTabs] = useState([
    {
      title: "Account",
      active: true,
    },
    {
      title: "Tickets/Bookings",
      active: false,
    },
    {
      title: "Payment methods",
      active: false,
    },
  ]);

  useEffect(() => {
    setActiveMainTab(Number(localStorage.getItem("activeMainTabIndex")) ?? 0);
    mainTabs?.map((tab) => {
      tab.active = false;
      mainTabs[Number(localStorage.getItem("activeMainTabIndex"))].active =
        true;
    });
  }, [mainTabs]);
  const handleClick = (index: number, status: boolean) => {
    mainTabs?.map((tab) => {
      tab.active = false;
      if (status === true) {
        mainTabs[index].active = status;
        setActiveMainTab(index);
        localStorage.setItem("activeMainTabIndex", String(index));
      } else {
        mainTabs[index].active = !status;
      }
    });
    setMainTabs([...mainTabs]);
  };
  const { data }:any = useGetData<IUser[]>({
    queryKey: ["user-data"],
    url: `/user`,
    options: { refetchOnWindowFocus: false, staleTime: Infinity },
  });
  console.log(data);

  return (
    <div className="relative">
      <div className="relative">
        <Image src={profileMainPhoto} alt="" />
        <button className="absolute md:right-6 md:bottom-6 right-3 bottom-3 flex items-center gap-2 main-btn md:py-3 md:px-4 py-2 px-2 rounded-[4px] ">
          <BsCloudUploadFill />
          <span className="text-sm font-medium md:flex hidden">
            Upload new cover
          </span>
        </button>
      </div>
      <div className="avatar-wrapper flex flex-col gap-6 max-w-[200px] sm:-translate-y-[35%] -translate-y-[28%] mx-auto ">
        <Image
          src={avatarPhoto}
          className="md:w-[160px] sm:w-[120px] w-[80px]  md:h-[160px] sm:h-[120px] h-[80px] overflow-hidden rounded-full border-4 mx-auto border-[#FF8682]  object-center object-fill"
          alt=""
        />
        <div className="user-info flex flex-col text-center md:gap-2  ">
          <h3 className="md:text-2xl text-md font-semibold">{data?.first_name}</h3>
          <span className="md:text-base text-sm font-normal opacity-75">
            {data?.email}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 relative md:py-6 md:px-6 py-3 px-3 rounded-xl shadow-md bg-white md:gap-x-6 gap-x-2">
        {mainTabs.map((item, index) =>
          item?.active ? (
            <div
              id={index === 0 ? "#account" : index === 2 ? "#payment" : ""}
              className="col-span-4 cursor-pointer flex justify-between py-[6px]"
              onClick={() => handleClick(index, false)}
              key={index}
            >
              <h3
                className={`font-semibold md:text-base text-xs text-[#8dd3bb]`}
              >
                {item?.title}
              </h3>
              {index !== 2 ? (
                <Divider type="vertical" className="block h-auto" />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div
              className="col-span-4 cursor-pointer flex justify-between py-[6px]"
              onClick={() => handleClick(index, true)}
              key={index}
            >
              <h3 className="font-semibold md:text-base text-[#121] text-xs ">
                {item?.title}
              </h3>
              {index !== 2 ? (
                <Divider type="vertical" className="block h-auto" />
              ) : (
                ""
              )}
            </div>
          )
        )}
        <div
          className={`w-[29%] absolute  bottom-0 h-1 duration-300 ease-in rounded bg-[#CDEAE1] ${
            activeMainTab === 0
              ? "left-4"
              : activeMainTab === 1
              ? "left-[34%]"
              : "left-[66.5%]"
          }`}
        ></div>
      </div>
      <div className="mt-10">
        {activeMainTab === 0 ? (
          <UserMe />
        ) : activeMainTab === 1 ? (
          <TicketBookings />
        ) : activeMainTab === 2 ? (
          <PaymentMethods />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
