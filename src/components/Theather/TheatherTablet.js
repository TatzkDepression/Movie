import React, { useEffect, useState } from "react";
import { movieService } from "../../services/service";
import { ConfigProvider, Tabs } from "antd";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
const onChange = (key) => {
    console.log(key);
};

export default function TheatherTablet() {
    const [heThongRap, setHeThongRap] = useState([]);

    useEffect(() => {
        movieService
            .getMovieByTheather()
            .then((res) => {
                setHeThongRap(res.data.content);
            })
            .catch((err) => {
                console.log("🚀👾👽 ~ err:", err);
            });
    }, []);

    let renderHeThongRap = () => {
        return heThongRap.map((heThong) => {
            return {
                key: heThong.maHeThongRap,
                label: <img className="w-16" src={heThong.logo} alt="" />,
                children: (
                    <Tabs
                        style={{
                            height: 400,
                            maxWidth: 350,
                        }}
                        tabPosition="left"
                        items={heThong.lstCumRap.map((cumRap) => {
                            return {
                                key: cumRap.tenCumRap,
                                label: (
                                    <div className="text-left whitespace-normal w-56">
                                        <p>{cumRap.tenCumRap}</p>
                                        <p>{cumRap.diaChi}</p>
                                    </div>
                                ),
                                children: (
                                    <Tabs
                                        style={{
                                            height: 400,
                                            maxWidth: 350,
                                        }}
                                        tabPosition="left"
                                        items={renderDSPhim(cumRap)}
                                    />
                                ),
                            };
                        })}
                    />
                ),
            };
        });
    };

    let renderDSPhim = (cumRap) => {
        return cumRap.danhSachPhim.map((phim) => {
            return {
                key: phim.maPhim,
                label: (
                    <div
                        className="flex py-2 border-b-2 space-x-2 w-96"
                        key={phim.maPhim}
                    >
                        <img
                            className="w-20 h-32 object-cover"
                            src={phim.hinhAnh}
                            alt=""
                            loading="lazy"
                        />
                        <div>
                            <h3 className="font-medium mb-2">{phim.tenPhim}</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {phim.lstLichChieuTheoPhim
                                    .slice(0, 6)
                                    .map((lichChieu, index) => {
                                        return (
                                            <NavLink
                                                to={`/detail/${phim.maPhim}`}
                                                key={index}
                                                className="rounded bg-red-500 px-2 py-1 text-white"
                                                key={index}
                                            >
                                                {moment(
                                                    lichChieu.ngayChieuGioChieu
                                                ).format("DD/MM/YY - hh:mm")}
                                            </NavLink>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                ),
                children: "",
            };
        });
    };

    return (
        <div className="container py-20">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F63E02",
                        borderRadius: 2,
                        colorBgContainer: "#fff",
                    },
                }}
            >
                <Tabs
                    style={{
                        height: 500,
                    }}
                    defaultActiveKey="1"
                    items={renderHeThongRap()}
                    tabPosition="top"
                    onChange={onChange}
                    id="theather"
                />
            </ConfigProvider>
        </div>
    );
}
