import React from "react";
import { useMediaQuery } from "react-responsive";
import PurchaseDesktop from "./PurchaseDesktop";
import PurchaseTablet from "./PurchaseTablet";
import PurchaseMobile from "./PurchaseMobile";

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

export default function Purchase() {
    return (
        <div>
            <Desktop>
                <PurchaseDesktop />
            </Desktop>
            <Tablet>
                <PurchaseTablet />
            </Tablet>
            <Mobile>
                <PurchaseMobile />
            </Mobile>
        </div>
    );
}
