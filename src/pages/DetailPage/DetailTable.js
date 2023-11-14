import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/service";
import { Rate } from "antd";

export default function DetailTable() {
    let { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        movieService
            .getDetail(id)
            .then((res) => {
                setDetail(res.data.content);
            })
            .catch((err) => {
                console.log("🚀👾👽 ~ err:", err);
            });
    }, []);

    return (
        <div className="">
            <div className="container p-20 bg-orange-200">
                <div className="bg-white rounded-lg shadow-2xl md:flex">
                    <img
                        alt=""
                        src={detail.hinhAnh}
                        className="md:w-1/3 rounded-lg md:rounded-r-none md:rounded-l-lg h-96 object-cover shrink-0"
                    />
                    <div className="p-6">
                        <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                            {detail.tenPhim}
                        </h2>
                        <p className="text-orange-700">{detail.moTa}</p>
                        <Rate
                            disabled
                            value={detail.danhGia / 2}
                            className="mt-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
