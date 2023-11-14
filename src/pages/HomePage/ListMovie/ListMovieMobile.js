import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/service";
import { Card, Rate } from "antd";
import { NavLink } from "react-router-dom";
import Meta from "antd/es/card/Meta";

export default function ListMovieMobile() {
    const [list, setList] = useState([]);

    useEffect(() => {
        movieService
            .getList()
            .then((res) => {
                setList(res.data.content);
            })
            .catch((err) => {
                console.log("🚀👾👽 ~ err:", err);
            });
    }, []);

    let renderList = () => {
        return list.map(({ hinhAnh, maPhim, tenPhim, danhGia }) => {
            return (
                <Card
                    key={maPhim}
                    hoverable
                    cover={
                        <NavLink to={`/detail/${maPhim}`}>
                            <img
                                alt=""
                                loading="lazy"
                                src={hinhAnh}
                                style={{
                                    width: "100%",
                                }}
                                className="h-[300px] object-contain sm:object-cover"
                            />
                        </NavLink>
                    }
                >
                    <NavLink
                        to={`/detail/${maPhim}`}
                        className="text-center sm:text-left"
                    >
                        <Meta title={tenPhim} />
                    </NavLink>
                    <Rate
                        disabled
                        value={danhGia / 2}
                        className="mt-2 block text-center sm:text-left"
                    />
                    <NavLink
                        className="block px-2 text-center sm:text-left"
                        to={`/detail/${maPhim}`}
                    >
                        <span className="mt-2 btn-theme-red inline-block">
                            Xem ngay
                        </span>
                    </NavLink>
                </Card>
            );
        });
    };

    return (
        <div
            className="container grid grid-cols-1 sm:grid-cols-2 gap-4 py-5"
            id="showtimes"
        >
            {renderList()}
        </div>
    );
}
