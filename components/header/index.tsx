import React, { useEffect, useState } from "react";
import { GiSofa } from "react-icons/gi";
import AirplaneIcon from "../helperComponents/AirplaneIcon";
import { Layout, theme, Divider, Avatar, Popover } from "antd";
import Link from "next/link";
import { GreenLogo } from "../logo";
import Image from "next/image";
import photo from "../../public/images/avatar.jpeg";
import { BiChevronDown, BiSolidUser } from "react-icons/bi";
import { IoCard, IoLogOut, IoSettings } from "react-icons/io5";
import { MdSupport } from "react-icons/md";
import { useAppSelector } from "../../store/service";
import SofaIcon from "../helperComponents/SofaIcon";
import useGetData from "../../custom-hooks/getData";
import { IUser } from "../../types/user.type";

const CHeader = () => {
  const { Header } = Layout;
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const [menu, setMenu] = useState([
    {
      label: "Find Flight",
      icon: <AirplaneIcon />,
      url: "/flight",
      active: true,
    },
    {
      label: "Find Stays",
      icon: <SofaIcon fill={"#121"} />,
      url: "/hotel",
      active: false,
    },
  ]);

  const { data }: any = useGetData<IUser>({
    queryKey: ["user-data"],
    url: "/site/me",
  });
  useEffect(() => {
    setActiveMenu(Number(localStorage.getItem("activeMenu")) ?? 0);
  }, []);
  const handleActiveMenu = (index: number, status: boolean) => {
    menu?.forEach((element) => {
      element.active = false;
      if (status === true) {
        menu[index].active = true;
      } else {
        menu[index].active = false;
      }
    });
    setMenu([...menu]);
    setActiveMenu(index);
    localStorage.setItem("activeMenu", String(index));
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  const content = (
    <div className="p-5 flex flex-col gap-y-5 w-[265px]">
      <div className="flex gap-x-4 items-center">
        <Image src={photo} className="max-w-[64px] rounded-full" alt="" />
        <div className="flex flex-col">
          <h4 className="text-base text-[#121] font-semibold select-none">
            {data?.first_name}
          </h4>
          <span className="text-sm text-[#121] opacity-75">Online</span>
        </div>
      </div>
      <Divider className="m-0" />
      <Link
        href={"/profile#account"}
        onClick={() => localStorage.setItem("activeMainTabIndex", String(0))}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-x-2">
            <BiSolidUser className="text-xl" />
            <h5 className="text-sm text-[#121] font-medium">My account</h5>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M6 4L10.5 8.5L6 13"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Link>
      <div className="flex justify-between items-center cursor-pointer">
        <Link
          href={"/profile#payment"}
          onClick={() => localStorage.setItem("activeMainTabIndex", String(2))}
          className="flex items-center gap-x-2"
        >
          <IoCard className="text-xl" />
          <h5 className="text-sm text-[#121] font-medium">Payments</h5>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M6 4L10.5 8.5L6 13"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2">
          <IoSettings className="text-xl" />
          <h5 className="text-sm text-[#121] font-medium">Settings</h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M6 4L10.5 8.5L6 13"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Divider className="m-0" />
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2">
          <MdSupport className="text-xl" />
          <h5 className="text-sm text-[#121] font-medium">Support</h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M6 4L10.5 8.5L6 13"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={() => localStorage.removeItem("accessToken")}
      >
        <IoLogOut className="text-xl" />
        <h5 className="text-sm text-[#121] font-medium">Logout</h5>
      </div>
    </div>
  );
  return (
    <div className={`header`}>
      <Layout className="shadow-md">
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="md:h-[87px] "
        >
          <div className="flex items-center justify-between md:translate-y-1/4">
            <div className="gap-x-8 relative md:flex hidden">
              {menu?.map((item, index) =>
                item.active ? (
                  <Link
                    href={item?.url}
                    className="flex items-center gap-1 cursor-pointer text-[#121]"
                    key={index}
                    onClick={() => handleActiveMenu(index, false)}
                  >
                    <div className="flex items-center gap-1">
                      {item?.icon}
                      {item?.label}
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={item?.url}
                    className="flex items-center gap-1 cursor-pointer text-[#121]"
                    key={index}
                    onClick={() => handleActiveMenu(index, true)}
                  >
                    <div className="flex items-center gap-1">
                      {item?.icon}
                      {item?.label}
                    </div>
                  </Link>
                )
              )}
              <hr
                className={`absolute -bottom-2 w-[107px] duration-200 ease-linear h-1 m-0 bg-[#8dd3bb] ${
                  activeMenu === 0 ? "left-0" : "left-[55%]"
                }`}
              />
            </div>
            <GreenLogo />
            <div className="flex items-center gap-x-4">
              {auth !== null ? (
                <>
                  <Link href={"/favourites"}>
                    <button className="flex items-center gap-x-1 text-[#121]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M12.0005 21.5C11.6994 21.4996 11.4054 21.4086 11.1568 21.2389C7.47286 18.7381 5.87771 17.0234 4.99786 15.9514C3.12286 13.6663 2.22521 11.3202 2.25052 8.77953C2.28005 5.86813 4.61583 3.5 7.4574 3.5C9.52365 3.5 10.9547 4.66391 11.7882 5.63328C11.8146 5.66368 11.8472 5.68805 11.8838 5.70476C11.9205 5.72146 11.9603 5.73011 12.0005 5.73011C12.0408 5.73011 12.0806 5.72146 12.1172 5.70476C12.1538 5.68805 12.1865 5.66368 12.2129 5.63328C13.0463 4.66297 14.4774 3.5 16.5436 3.5C19.3852 3.5 21.721 5.86812 21.7505 8.78C21.7758 11.3211 20.8772 13.6672 19.0032 15.9519C18.1233 17.0239 16.5282 18.7386 12.8443 21.2394C12.5955 21.4089 12.3016 21.4998 12.0005 21.5Z"
                          fill="#112211"
                        />
                      </svg>
                      Favourites
                    </button>
                  </Link>
                  <Divider
                    type="vertical"
                    className=" bg-[#121] font-semibold w-[1.5px]"
                  />
                  <Popover
                    content={content}
                    placement="bottomRight"
                    className="profile-avatar-popover"
                    trigger={"click"}
                  >
                    <div className="text-[#121]  flex items-center gap-x-1 font-semibold select-none">
                      <div className="relative">
                        <Avatar
                          size={45}
                          className=" flex items-center justify-center cursor-pointer"
                          icon={<Image src={photo} alt="profile photo" />}
                        />
                        <div className="absolute right-0 bottom-[1%] z-50 rounded-full  bg-[#FF8682]">
                          <BiChevronDown size={14} />
                        </div>
                      </div>
                      {data?.first_name} {data?.last_name.slice(0, 1)}.
                    </div>
                  </Popover>
                </>
              ) : (
                <>
                  <Link
                    href={"/auth/login"}
                    className="text-[#121] hover:text-[#121]"
                  >
                    <button className="login-btn py-[10px] text-[#121] hover:text-[#121] px-6 rounded-lg leading-normal">
                      Login
                    </button>
                  </Link>
                  <Link href={"/auth/register"}>
                    <button className="sign-btn py-[10px]  px-6 rounded-lg leading-normal">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default CHeader;
