import React from "react";
import { Button, Form, Input } from "antd";
import { userService } from "../../services/service";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import bgRegister from "./bg.jpg";

const RegisterMobile = () => {
    let navigate = useNavigate();

    const [form] = Form.useForm();
    const onFinish = (values) => {
        let { confirm, ...newUser } = values;
        userService
            .register(newUser)
            .then((res) => {
                toast.success("Đăng ký thành công, hãy đăng nhập!");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            })
            .catch((err) => {
                toast.error(err.response.data.content);
            });
    };
    return (
        <div
            style={{
                backgroundImage: `url(${bgRegister})`,
                height: "calc(100vh - 56px)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "24px",
            }}
        >
            <Form
                className="container bg-white py-6 rounded-xl min-[480px]:w-[400px]"
                layout="vertical"
                form={form}
                name="register"
                onFinish={onFinish}
                style={{
                    maxWidth: "calc(100% - 48px)",
                }}
                scrollToFirstError
            >
                <Form.Item
                    className="mb-1"
                    name="taiKhoan"
                    label="Tài khoản"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập tên tài khoản!",
                            whitespace: true,
                        },
                        {
                            pattern: /^\S*$/,
                            message: "Vui lòng không sử dụng khoảng trống!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="mb-1"
                    name="matKhau"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu của bạn!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    className="mb-1"
                    name="confirm"
                    label="Nhập lại mật khẩu"
                    dependencies={["matKhau"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập lại mật khẩu của bạn!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("matKhau") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "Bạn phải nhập lại chính xác mật khẩu!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    className="mb-1"
                    name="hoTen"
                    label="Họ tên"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập họ tên của bạn!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="mb-1"
                    name="soDt"
                    label="Số điện thoại"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập số điện thoại!",
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: "Vui lòng chỉ nhập số!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="mb-1"
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "Bạn hãy nhập chính xác định dạng email!",
                        },
                        {
                            required: true,
                            message: "Vui lòng nhập email của bạn!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className="text-center">
                    <Button
                        type=""
                        htmlType="submit"
                        className="mt-2 bg-red-500 text-white hover:bg-white hover:border-red-500 hover:text-red-500 transition-[500ms]"
                    >
                        Đăng ký
                    </Button>
                </Form.Item>
                <NavLink
                    to="/login"
                    className="underline hover:underline block text-left mt-[-12px]"
                >
                    Bạn đã có tài khoản? Bấm để đăng nhập
                </NavLink>
            </Form>
        </div>
    );
};
export default RegisterMobile;
