import { Button, Carousel, Checkbox, Form, Input, Switch, message } from "antd";
import React, { useEffect, useState } from "react";
import instance from "../../configs/axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import imageAuth from "../../public/images/Group 4.png";
import Image from "next/image";
import FieldSetComponent from "../filedSet";
import Link from "next/link";
import Google from "../../public/images/google.png";
import FaceBook from "../../public/images/facebook.png";
import Apple from "../../public/images/apple.png";
import { GreenLogo } from "../logo";
import { useRouter } from "next/router";

const RegisterComponent = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const onFinish = async () => {
    try {
      await instance({
        url: "/site/register",
        method: "POST",
        data: user,
      });
      // message.success("You are logged")
        router.push("/profile")
    } catch (error: any) {
      message.error(error?.response?.data?.detail[0].msg || "Error");
    }
  };

  return (
    <div className="authContainer ">
      <div className="grid grid-cols-12 gap-[104px]">
        <div className="lg:col-span-5 lg:block hidden ">
          <Carousel autoplay>
            <Image
              className="auth-image"
              src={imageAuth}
              priority={true}
              alt=""
            />
          </Carousel>
        </div>
        <div className="lg:col-span-7 col-span-12">
          <GreenLogo />
          <h3 className="mt-[64px] text-[40px] font-bold text-black mb-4">
            Sign Up
          </h3>
          <span className="auth-desc">
            Let’s get you all st up so you can access your personal account.
          </span>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="mt-5 w-full gap-y-3"
            size="large"
          >
            <div className="flex flex-col md:flex-row gap-3 mb-2">
              <FieldSetComponent className="w-full  " title={"First Name"}>
                <Input
                  bordered={false}
                  className="w-full"
                  value={user.first_name}
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                  name="first_name"
                />
              </FieldSetComponent>
              <FieldSetComponent className="w-full " title="Last Name">
                <Input
                  bordered={false}
                  className="w-full"
                  value={user.last_name}
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                  name="last_name"
                />
              </FieldSetComponent>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mb-2">
              <FieldSetComponent title="Email" className="w-full">
                <Input
                  bordered={false}
                  className="w-full"
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </FieldSetComponent>
              <FieldSetComponent title="Phone Number" className="w-full">
                <Input
                  bordered={false}
                  className="w-full"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  name="phone"
                />
              </FieldSetComponent>
            </div>
            <FieldSetComponent title={"Password"} className="w-full   mb-2">
              <Input.Password
                bordered={false}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                name="password"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </FieldSetComponent>

            <FieldSetComponent
              title={"Confirm Password"}
              className="w-full   mb-2"
            >
              <Input.Password
                bordered={false}
                value={user.confirm_password}
                onChange={(e) =>
                  setUser({ ...user, confirm_password: e.target.value })
                }
                name="confirm_password"
                placeholder="input password"
              />
            </FieldSetComponent>
            <Checkbox className="mb-4 text-sm">
              I agree to all the <span className="myred-color">Terms</span> and{" "}
              <span className="myred-color">Privacy Policies</span>
            </Checkbox>

            <button
              className="w-full px-3 py-3 rounded mygreen-bgColor auth-btn"
              type="submit"
            >
              Create account
            </button>
          </Form>
          <div className="text-center mt-4">
            <span className="already-text">
              Already have an account?{" "}
              <Link href="/auth/login" className="myred-color">
                {" "}
                Login
              </Link>
            </span>
            <div className="flex items-center" style={{ margin: "40px 0" }}>
              <hr className="w-full " />
              <span className="px-3 or-elements">Or Sign up with</span>
              <hr className="w-full" />
            </div>
            <div className="flex gap-3 mt-[40px]">
              <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]">
                <Image
                  src={FaceBook}
                  className="mx-auto"
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]">
                <Image
                  src={Google}
                  className="mx-auto"
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]">
                <Image
                  src={Apple}
                  className="mx-auto"
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
