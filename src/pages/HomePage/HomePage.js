import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import Theather from "../../components/Theather/Theather";
import Hero from "./Hero";
import { animateScroll } from "react-scroll";

export default function HomePage() {
    return (
        <div className="relative scroll-smooth">
            <Hero />
            <ListMovie />
            <Theather />
            <span
                className="absolute bottom-[-6px] right-0 cursor-pointer"
                onClick={() => {
                    animateScroll.scrollToTop({
                        duration: 500,
                        smooth: true,
                    });
                }}
            >
                <svg
                    width="80px"
                    height="80px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#EF4444"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                            stroke="#EF4444"
                            strokeWidth={1}
                        />
                        <path
                            d="M12 15.5L12 8.5M12 8.5L9.5 11M12 8.5L14.5 11"
                            stroke="#EF4444"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </span>
        </div>
    );
}
