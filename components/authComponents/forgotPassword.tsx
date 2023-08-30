import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import imageAuth from "../../public/images/Group 4.png"
import Image from "next/image";
import Google from "../../public/images/google.png"
import FaceBook from "../../public/images/facebook.png"
import Apple from "../../public/images/apple.png"
import instance from "../../configs/axios";
import FieldSetComponent from "../filedSet";
import {RiArrowLeftSLine} from "react-icons/ri"
import { GreenLogo } from "../logo";
import { useRouter } from "next/router";


const ForgotPasswordComponent = () => {

  const router = useRouter();
  const [user,setUser] = useState({
    email: "",
  })
  useEffect(()=>{

    localStorage.setItem("user_email", user?.email)
  },[user])
  const onFinish = async () => {
      try {
        let res = await instance({
          url: "/site/forgot-password",
          method: "POST",
          data: user,
        });
        message.success(res?.data?.msg || "Send code");

        setTimeout(()=>{
          router.push("/auth/verify-code")
        },1000)
      } catch (error: any) {
        message.error(error?.response?.data?.msg || "");
        // router.push("/auth/login")
      }
  };


  return (
    <div className="authContainer">
      <div className="grid grid-cols-12 gap-[104px]">
        <div className="col-span-5 login-right">
          <GreenLogo/>
         <div className="backLogin-elements">
        <Link href={"/auth/login"}>
        <RiArrowLeftSLine style={{fontSize:"26px"}}/>
         Back to Login
         </Link>
         </div>
         <h3 className="mt-5 text-[40px] font-bold text-black mb-4 font-TradeGothic ">Forgot your password?</h3>
          <span className="auth-desc opacity-75">Don’t worry, happens to all of us. Enter your email below to recover your password</span>
          <Form onFinish={onFinish} layout="vertical" className="mt-5 ">
            <FieldSetComponent
            title="Email"
            
            >
              <Input value={user?.email} placeholder="example@gmail.com" onChange={(e)=> setUser({...user, email:e.target.value})} />
            </FieldSetComponent>
            <div className="d-flex flex-sm-row flex-column align-items-baseline justify-content-between">
            </div>
            <button className="w-full px-3 py-3 rounded auth-btn mygreen-bgColor" style={{fontWeight:500}}  type="submit">Submit</button>
          </Form>
          <div className="text-center mt-3">
          <div
              className="flex items-center my-[40px]"
            >
              <hr className="w-full" />
              <span className="px-3 or-elements">Or login with</span>
              <hr className="w-full" />
            </div>
            <div className="flex gap-3 mt-[40px]">
              <span
                className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"
              >
                <Image src={FaceBook} className="mx-auto" width={24} height={24} alt="" />
              </span>
              <span
                className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"
              >
                <Image src={Google} className="mx-auto" width={24} height={24} alt="" />
              </span>
              <span
                className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"
              >
                <Image src={Apple} className="mx-auto" width={24} height={24} alt="" />
              </span>
            </div>
            </div>
        </div>
        <div className="col-span-7 lg:block hidden overflow-hidden">
        <Carousel autoplay >
            <Image className="auth-image" src={imageAuth} alt="" />
            <Image className="auth-image" src={imageAuth} alt="" />
            </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
