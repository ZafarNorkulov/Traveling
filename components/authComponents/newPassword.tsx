import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import imageAuth from "../../public/images/Group 4.png";
import Image from "next/image";
import Google from "../../public/images/google.png";
import FaceBook from "../../public/images/facebook.png";
import Apple from "../../public/images/apple.png";
import instance from "../../configs/axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/reducers/authReducer";
import FieldSetComponent from "../filedSet";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GreenLogo } from "../logo";

const NewPasswordComponent = () => {
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
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
      // router.push("/profile")
    } catch (error: any) {
      message.error(error?.response?.data?.msg || "UnLogged");
      // router.push("/auth/login")
    }
  };

  return (
    <div className="authContainer">
      <div className="row gx-5">
        <div className="col-lg-5 login-right">
          <GreenLogo/>
          <div className="backLogin-elements">
            <Link href={"/auth/login"}>
              <RiArrowLeftSLine style={{ fontSize: "26px" }} />
              Back to Login
            </Link>
          </div>
          <h3>Forgot your password?</h3>
          <span className="auth-desc">
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </span>
          <Form onFinish={onFinish} layout="vertical" className="mt-5 ">
            <FieldSetComponent title="Create Password">
              <Input.Password
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Create password..."
              />
            </FieldSetComponent>
            <FieldSetComponent title="Re-enter Password" className="mt-2">
              <Input.Password
                value={user?.confirmPassword}
                placeholder="Repeat password"
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
            </FieldSetComponent>
            <div className="d-flex flex-sm-row flex-column align-items-baseline justify-content-between"></div>
            <button
              className="w-100 px-3 py-3 rounded auth-btn mygreen-bgColor"
              style={{ fontWeight: 500 }}
              type="submit"
            >
              Set password
            </button>
          </Form>
        </div>
        <div className="col-7 d-lg-block d-none">
          <Carousel autoplay>
            <Image className="auth-image" src={imageAuth} alt="" />
            <Image className="auth-image" src={imageAuth} alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordComponent;
