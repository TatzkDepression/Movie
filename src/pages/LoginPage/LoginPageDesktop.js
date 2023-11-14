import React from "react";
import { Button, Form, Input } from "antd";
import { userService } from "../../services/service";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import bgLogin from "./bgNew.png";
import Lottie from "lottie-react";
import loginAnimation from "./loginAnimation.json";
import { setInfo } from "../../redux/action/userAction";

const LoginPageDesktop = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const onFinish = (values) => {
        userService
            .login(values)
            .then((res) => {
                dispatch(setInfo(res.data.content));
                localStorage.setItem("USER", JSON.stringify(res.data.content));
                toast.success("Đăng nhập thành công!");
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            })
            .catch((err) => {
                toast.error("Đăng nhập thất bại!");
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className=" bg-orange-300"
            style={{
                backgroundImage: `url(${bgLogin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="login-content container flex justify-center items-center">
                <div className="w-1/2 p-10 bg-white rounded-2xl">
                    <Form
                        layout="vertical"
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tài khoản"
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item className="text-center">
                            <Button
                                type=""
                                htmlType="submit"
                                className="bg-red-500 text-white hover:bg-white hover:border-red-500 hover:text-red-500 transition-[500ms]"
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <NavLink
                            to="/register"
                            className="underline hover:underline block text-right"
                        >
                            Bạn chưa có tài khoản? Bấm để đăng ký
                        </NavLink>
                    </Form>
                </div>
                <div className="w-1/2">
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};
export default LoginPageDesktop;
