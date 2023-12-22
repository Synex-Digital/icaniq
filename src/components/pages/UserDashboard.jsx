import React, { useState, useEffect } from "react";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_hd.webp";
import team from "../../assets/team.jpg";

const UserDashboard = (props) => {
    let loginUser = useSelector((state) => state.loggedUser.loginUser);
    let userToken = useSelector((state) => state.tokened.Token);
    let [performance, setPerformance] = useState("");
    let [loading, setloading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://laraveladmin.icaniqbd.com/api/performance",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: "application/json",
                        },
                    }
                );

                const responseData = await response.json();
                setPerformance(responseData.data);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        }
        fetchData();
        setloading(false);
    }, []);

    if (loading) {
        return <h1 className="mt-16">Loading.......</h1>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-4  justify-between mt-16 p-4 w-full  ">
            <div className="xl:w-[75%]">
                <div className="grid gap-4 h-fit w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                    <div className="rounded-lg border text-[#6D6D6D] border-gray-300 px-8 py-5 shadow-sm flex flex-col">
                        <div className="flex gap-x-3 items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#6D6D6D]"></div>
                            <p className="font-rb text-2xl">Total Tests</p>
                        </div>
                        <span className="font-rb text-black font-semibold mt-5 text-2xl">
                            {performance.total_test}
                        </span>
                    </div>

                    <div className="rounded-lg border text-[#6D6D6D] border-gray-300 px-8 py-5 shadow-sm flex flex-col">
                        <div className="flex gap-x-3 items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#32B548]"></div>
                            <p className="font-rb text-2xl">Average Score</p>
                        </div>
                        <span className="font-rb text-black font-semibold mt-5 text-2xl">
                            {performance.av_score}
                        </span>
                    </div>
                    <div className="rounded-lg border text-[#6D6D6D] border-gray-300 px-8 py-5 shadow-sm flex flex-col">
                        <div className="flex gap-x-3 items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#DB2828]"></div>
                            <p className="font-rb text-2xl">Average Time</p>
                        </div>
                        <span className="font-rb text-black font-semibold mt-5 text-2xl">
                            {performance.av_time}
                        </span>
                    </div>
                </div>
                <div className=" smalldevice:max-md:hidden">
                    <Image className="mt-10" imgsrc={team} />
                </div>
            </div>
            <div className="flex xl:w-[25%] flex-col gap-4">
                <div className=" bg-[#162655] h-fit p-5 rounded-2xl text-center">
                    <Image
                        className="w-24 h-24 rounded-full mx-auto"
                        imgsrc={loginUser.profile}
                    />
                    <h2 className=" font-rb font-bold text-2xl mt-5 text-white">
                        Welcome {loginUser.name}
                    </h2>
                    <p className=" font-rb font-bold mt-2 mb-7 text-white">
                        ID: {loginUser.student_id}
                    </p>
                    <p className="bg-[#FFCC00] px-2 py-2 rounded font-rb">
                        Validity {loginUser.validity}
                    </p>
                </div>

                <div className="flex justify-center bg-[#162655] p-5 rounded-2xl">
                    <img src={logo} className="w-[70%]" />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
