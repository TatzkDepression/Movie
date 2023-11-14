import React from "react";
import DetailDesktop from "./DetailDesktop";
import DetailTable from "./DetailTable";
import DetailMobile from "./DetailMobile";
import Booking from "./Booking/Booking";
import { useMediaQuery } from "react-responsive";

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

export default function DetailPage() {
    return (
        <div>
            <Desktop>
                <DetailDesktop />
            </Desktop>
            <Tablet>
                <DetailTable />
            </Tablet>
            <Mobile>
                <DetailMobile />
            </Mobile>
            <Booking />
        </div>
    );
}
