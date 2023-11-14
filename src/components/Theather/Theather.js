import React from "react";
import { useMediaQuery } from "react-responsive";
import TheatherDesktop from "./TheatherDesktop";
import TheatherTablet from "./TheatherTablet";
import TheatherMobile from "./TheatherMobile";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

export default function Theather() {
    return (
        <div>
            <Desktop>
                <TheatherDesktop />
            </Desktop>
            <Tablet>
                <TheatherTablet />
            </Tablet>
            <Mobile>
                <TheatherMobile />
            </Mobile>
        </div>
    );
}
