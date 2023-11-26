import React from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";

const ExamTime = ({ expiryTimestamp }) => {
    let navigate = useNavigate()
    const { seconds, minutes, isRunning } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            return navigate("/user/iqtest");
        },
    });

    

    return (
        <div style={{ textAlign: "center" }}>
            <div className="flex gap-x-5 items-center">
                <div className=" font-semibold text-2xl">
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p className=" font-medium text-lg text-green-500">
                    {isRunning ? "Running" : "Not running"}
                </p>
            </div>
        </div>
    );
};

export default ExamTime;
