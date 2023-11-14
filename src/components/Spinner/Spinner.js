import React from "react";
import { useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

export default function Spinner() {
    const { isLoading } = useSelector((state) => state.spinnerReducer);
    return isLoading ? (
        <div className="h-screen w-screen bg-black fixed z-50 flex justify-center items-center">
            <ScaleLoader
                color="#F63E02"
                height={200}
                margin={10}
                radius={99}
                speedMultiplier={1}
                width={20}
            />
        </div>
    ) : (
        <></>
    );
}
