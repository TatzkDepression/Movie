import React, { useEffect, useState } from "react";
import { movieService } from "../../services/service";
import { Carousel } from "antd";
import playBtn from "./play.png";
import ReactPlayer from "react-player";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState("");
  const [list, setList] = useState([]);
  const contentStyle = {
    height: "calc(75vh - 80px)",
    width: "100%",
    objectFit: "contain",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "rgb(254 215 170)",
  };

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

  useEffect(() => {
    if (isModalOpen) {
      document.querySelectorAll(".slick-dots").forEach((dots) => {
        dots.style.position = "unset";
      });
    } else {
      document.querySelectorAll(".slick-dots").forEach((dots) => {
        dots.style.position = "absolute";
      });
    }
  }, [isModalOpen]);

  let renderCarousel = () => {
    return list.map(({ hinhAnh, maPhim, trailer }) => {
      return (
        <div key={maPhim} className="relative">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTrailer(trailer);
              setIsModalOpen(true);
            }}
          >
            <img
              loading="lazy"
              src={playBtn}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </a>
          <img src={hinhAnh} alt="" style={contentStyle} />
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel autoplay>{renderCarousel()}</Carousel>
      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="p-4 rounded-lg relative w-full max-w-2xl h-full max-h-[400px] text-center">
            <ReactPlayer
              url={selectedTrailer}
              width="100%" // Tăng kích thước chiều rộng của video
              height="100%" // Tăng kích thước chiều cao của video
              controls={true} // Hiển thị các nút điều khiển video
            />
          </div>
        </div>
      )}
    </div>
  );
}
