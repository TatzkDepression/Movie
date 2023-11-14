import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HeaderTablet() {
    let navigate = useNavigate();
    let { info } = useSelector((state) => state.userReducer);

    let handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    let renderNav = () => {
        if (info) {
            return (
                <>
                    <span className="inline-block mx-3">
                        Hi, {info.hoTen} !
                    </span>
                    <button className="btn-theme" onClick={handleLogout}>
                        Đăng xuất
                    </button>
                </>
            );
        }
        return (
            <>
                <button
                    className="btn-theme mx-3"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Đăng nhập
                </button>
                <button
                    className="btn-theme-red"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Đăng ký
                </button>
            </>
        );
    };

    return (
        <div className="shadow-lg">
            <div className="container flex justify-between items-center h-16">
                <span
                    className="text-4xl font-semibold text-red-500 cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    CyberCine
                </span>
                <div className="flex items-center gap-2">
                    <a
                        href="/#theather"
                        className="hover:text-red-500 cursor-pointer font-semibold p-2 inline-block"
                    >
                        Đặt vé
                    </a>
                    <a
                        href="/#showtimes"
                        className="hover:text-red-500 cursor-pointer font-semibold p-2 inline-block"
                    >
                        Nổi bật
                    </a>
                    <a
                        href="/#footer"
                        className="hover:text-red-500 cursor-pointer font-semibold p-2 inline-block"
                    >
                        Liên hệ
                    </a>
                </div>
                <nav>{renderNav()}</nav>
            </div>
        </div>
    );
}
