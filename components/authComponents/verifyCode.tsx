import {  Carousel, Form, Input, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import imageAuth from "../../public/images/Group 4.png";
import Image from "next/image";
import instance from "../../configs/axios";
import FieldSetComponent from "../filedSet";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GreenLogo } from "../logo";
import { EyeFilled } from "@ant-design/icons";
import { useRouter } from "next/router";

const VerifyCodeComponent = () => {

  const router = useRouter() 
  const [user, setUser] = useState<{code:string,email:string | null}>({
    code: "",
    email: "",
  });
  const [localStorageEmail, setLocalStorageEmail] = useState<string | null>(null);
  //TODO localstorage get user email and give state
  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem("user_email");
    setLocalStorageEmail(emailFromLocalStorage);
  },[user])

  //TODO Update the user state with the email from localStorage
  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, email: localStorageEmail }));
  }, [localStorageEmail]); 
  //TODO verify code give
  const onFinish = async () => {
    try {
      await instance({
        url: "/site/check-code",
        method: "POST",
        data: user,
      });
      router.push("/auth/new-password")
    } catch (error: any) {
      message.error(error?.response?.data?.detail[0].msg || "UnLogged");
    }
  };
  //TODO request to forgot password
const handleResend = async()=>{
  try {
    let res = await instance({
      url: "/site/forgot-password",
      method: "POST",
      data: user,
    });
    message.success(res?.data?.msg || "Send code");

    setTimeout(()=>{
      // router.push("/auth/verify-code")
    },1000)
  } catch (error: any) {
    message.error(error?.response?.data?.msg || "");
    // router.push("/auth/login")
  }
}
  return (
    <div className="authContainer">
      <div className="grid grid-cols-12 gap-x-[104px]">
        <div className="lg:col-span-5 col-span-12 login-right">
          <GreenLogo/>
          <div className="backLogin-elements">
            <Link href={"/auth/login"}>
              <RiArrowLeftSLine style={{ fontSize: "26px" }} />
              Back to Login
            </Link>
          </div>
          <h3 className="mt-[64px] text-[40px] font-bold text-black mb-4">Verify Code</h3>
          <span className="auth-desc opacity-75 mt-4">
            An authentication code has been sent to your email.
          </span>
          <Form onFinish={onFinish} className="mt-12 flex flex-col">
            <FieldSetComponent title="Enter Code" className="mb-2">
              <Input
              bordered={false}
              suffix={<EyeFilled size={24}  />}
                value={user?.code}
                placeholder="Write code"
                onChange={(e) => setUser({ ...user, code: e.target.value })}
              />
            </FieldSetComponent>
            <span className="already-text mt-4">
              Didn’t receive a code?{" "}
              <span  className="myred-color cursor-pointer" onClick={handleResend}>
                {" "}
                Resend
              </span>
            </span>
            <button
              className="w-full px-3 py-3 rounded auth-btn mygreen-bgColor mt-8"
              type="submit"
            >
              Verify
            </button>
          </Form>
        </div>
        <div className="col-span-7 lg:block hidden">
          <Carousel autoplay>
            <Image className="auth-image" src={imageAuth} alt="" />
            <Image className="auth-image" src={imageAuth} alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeComponent;
