import React from "react";
import { useMediaQuery } from "react-responsive";
import RegisterDesktop from "./RegisterDesktop";
import RegisterTablet from "./RegisterTablet";
import RegisterMobile from "./RegisterMobile";

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

export default function Register() {
    return (
        <div>
            <Desktop>
                <RegisterDesktop />
            </Desktop>
            <Tablet>
                <RegisterTablet />
            </Tablet>
            <Mobile>
                <RegisterMobile />
            </Mobile>
        </div>
    );
}
