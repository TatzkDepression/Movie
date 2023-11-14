import React, { useEffect, useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import moment from "moment/moment";
import { NavLink, useParams } from "react-router-dom";
import { movieService } from "../../../services/service";
const onChange = (key) => {};

export default function BookingDesktop() {
    const [detailBooking, setDetailBooking] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        movieService
            .getDetailBooking(id)
            .then((res) => {
                setDetailBooking(res.data.content.heThongRapChieu);
            })
            .catch((err) => {
                console.log("🚀👾👽 ~ err:", err);
            });
    }, []);

    let renderBooking = () => {
        return detailBooking.map((heThong) => {
            return {
                key: heThong.maHeThongRap,
                label: <img className="w-16" src={heThong.logo} alt="" />,
                children: (
                    <div
                        style={{
                            maxHeight: 500,
                            overflowY: "auto",
                        }}
                    >
                        {heThong.cumRapChieu.map((cumRap) => {
                            return (
                                <div key={cumRap.tenCumRap} className="mt-3">
                                    <p className="font-semibold">
                                        {cumRap.tenCumRap}
                                    </p>
                                    <p>{cumRap.diaChi}</p>
                                    <div className="flex gap-3">
                                        {cumRap.lichChieuPhim
                                            .slice(0, 6)
                                            .map((lichChieu) => {
                                                return (
                                                    <NavLink
                                                        to={`/purchase/${lichChieu.maLichChieu}`}
                                                        key={
                                                            lichChieu.maLichChieu
                                                        }
                                                        className="inline-block px-2 py-1 rounded bg-red-500 text-white max-w-[120px]"
                                                    >
                                                        {moment(
                                                            lichChieu.ngayChieuGioChieu
                                                        ).format(
                                                            "DD/MM/YY - hh:mm"
                                                        )}
                                                    </NavLink>
                                                );
                                            })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ),
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
                        maxHeight: 500,
                    }}
                    className="max-w-full"
                    defaultActiveKey="1"
                    items={renderBooking()}
                    tabPosition="left"
                    onChange={onChange}
                />
            </ConfigProvider>
        </div>
    );
}
