import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/service";
import { Card, Rate } from "antd";
import { NavLink } from "react-router-dom";
import Meta from "antd/es/card/Meta";

export default function ListMovieTablet() {
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
                                    height: 300,
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </NavLink>
                    }
                >
                    <NavLink to={`/detail/${maPhim}`}>
                        <Meta title={tenPhim} />
                    </NavLink>
                    <Rate disabled value={danhGia / 2} className="mt-2" />
                    <NavLink
                        className="mt-2 inline-block btn-theme-red px-2"
                        to={`/detail/${maPhim}`}
                    >
                        Xem ngay
                    </NavLink>
                </Card>
            );
        });
    };
    return (
        <div className="container grid grid-cols-3 gap-6 py-5" id="showtimes">
            {renderList()}
        </div>
    );
}
