import React from "react";
import { useMediaQuery } from "react-responsive";
import LoginPageDesktop from "./LoginPageDesktop";
import LoginPageMobile from "./LoginPageMobile";
import LoginPageTablet from "./LoginPageTablet";

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

export default function LoginPage() {
    return (
        <div>
            <Desktop>
                <LoginPageDesktop />
            </Desktop>
            <Tablet>
                <LoginPageTablet />
            </Tablet>
            <Mobile>
                <LoginPageMobile />
            </Mobile>
        </div>
    );
}
