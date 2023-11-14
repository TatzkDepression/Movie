import React from "react";

export default function FooterLaptop() {
    return (
        <div className="bg-black text-white">
            <div
                className="container flex gap-3 justify-between items-center py-5"
                id="footer"
            >
                <span className="text-4xl font-semibold text-red-500 cursor-pointer">
                    CyberCine
                </span>
                <p className="text-right">
                    Sản phẩm của nhóm 5 - BC56. <br />
                    Hoàn thành 11/2023. <br />
                </p>
            </div>
        </div>
    );
}
