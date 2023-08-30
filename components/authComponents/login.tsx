import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import imageAuth from "../../public/images/Group 4.png";
import Image from "next/image";
import Google from "../../public/images/google.png";
import FaceBook from "../../public/images/facebook.png";
import Apple from "../../public/images/apple.png";
import Airplane from "../../public/images/airplane-auth.png";
import instance from "../../configs/axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/reducers/authReducer";
import { GreenLogo } from "../logo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const FieldSetComponent = dynamic(() => import("../filedSet"), { ssr: false });

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const onFinish = async () => {
    try {
      let res = await instance({
        url: "/login",
        method: "POST",
        data: user,
      });
      message.success(res?.data?.msg || "Logged");
      localStorage.setItem("accessToken", res.data.access_token);
      dispatch(setUserInfo(res.data));
      router.push("/profile")
    } catch (error: any) {
      message.error(error?.response?.data?.detail || "UnLogged");
    }
  };

  return (
    <div className="authContainer h-[100vh]">
      <div className="grid grid-cols-12 xl:gap-x-[104px] md:gap-x-[80px]">
        <div className="lg:col-span-5 col-span-12 h-[100vh]">
          <GreenLogo />
          <h3 className="mt-[64px] text-[40px] font-bold text-black mb-4">Login</h3>
          <span className="auth-desc text-base text-[#121] font-normal opacity-75">Login to access your Golobe account</span>
          <Form onFinish={onFinish} layout="vertical" className="w-full mt-[48px] ">
            <FieldSetComponent title="Email" className="w-full ">
              <Input
              bordered={false}
              className="w-full"
                value={user?.email}
                placeholder="example@gmail.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FieldSetComponent>
            <FieldSetComponent title="Password" className="w-full  mt-3">
              <Input.Password
              bordered={false}
               className="w-full"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FieldSetComponent>
            <div className="w-full flex sm:flex-row flex-column items-baseline justify-between">
              <Form.Item
                name="remember"
                valuePropName="checked"
                className="mt-2"
              >
                <Checkbox >Remember me</Checkbox>
              </Form.Item>
              <Link href={"/auth/forgot-password"}>
                <div className="forgot-btn">
                  Forgot Password?
                </div>
                </Link>
            </div>
            <button
              className="w-full px-3 py-3 rounded auth-btn mt-[40px]"
              style={{ fontWeight: 500 }}
              type="submit"
            >
              Login
            </button>
          </Form>
          <div className="text-center mt-4">
            <span className="already-text">
              Don’t have an account?{" "}
              <Link href="/auth/register" className="myred-color">
                {" "}
                Sign up
              </Link>
            </span>
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
        <div className="col-span-7 lg:block hidden ">
          <Carousel autoplay dots={true} className="h-[88vh] ">
            <Image className="auth-image" src={imageAuth} alt="" />
            <Image className="auth-image" src={Airplane} alt="" />
            <Image className="auth-image" src={imageAuth} alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
