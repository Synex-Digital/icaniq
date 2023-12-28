import React, { useState, useEffect } from "react";
import Image from "../layout/Image";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_hd.webp";
import profile from "../../assets/profile.png";
import Slider from "react-slick";
import SampleNextArrow from "../layout/SampleNextArrow";
import SamplePrevArrow from "../layout/SamplePrevArrow";

const UserDashboard = (props) => {
    let loginUser = useSelector((state) => state.loggedUser.loginUser);
    let userToken = useSelector((state) => state.tokened.Token);
    let [performance, setPerformance] = useState("");
    let [banner, setBanner] = useState([]);
    let [loading, setloading] = useState(true);
    let [activeDot, setActiveDot] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setActiveDot(next);
        },

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    paddingBottom: "10px",
                }}
            >
                <ul
                    style={{
                        marginBottom: "15px",
                        display: "flex",
                        justifyContent: "center",
                        columnGap: "20px",
                    }}
                >
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === activeDot
                        ? {
                              width: "40px",
                              border: "2px white solid",
                              borderRadius: "10px",
                              padding: "2px",
                              background: "#fff",
                          }
                        : {
                              width: "40px",
                              border: "2px white solid",
                              borderRadius: "10px",
                              padding: "2px",
                          }
                }
            ></div>
        ),
    };

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
                setBanner(responseData.banner);
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
                            {performance == null ? 0 : performance.total_test}
                        </span>
                    </div>

                    <div className="rounded-lg border text-[#6D6D6D] border-gray-300 px-8 py-5 shadow-sm flex flex-col">
                        <div className="flex gap-x-3 items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#32B548]"></div>
                            <p className="font-rb text-2xl">Average Score</p>
                        </div>
                        <span className="font-rb text-black font-semibold mt-5 text-2xl">
                            {performance == null ? 0 : performance.av_score}
                        </span>
                    </div>
                    <div className="rounded-lg border text-[#6D6D6D] border-gray-300 px-8 py-5 shadow-sm flex flex-col">
                        <div className="flex gap-x-3 items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#DB2828]"></div>
                            <p className="font-rb text-2xl">Average Time</p>
                        </div>
                        <span className="font-rb text-black font-semibold mt-5 text-2xl">
                            {performance == null ? 0 : performance.av_time}
                        </span>
                    </div>
                </div>

                <div className="smalldevice:max-xl:hidden mt-5 w-full">
                    <Slider {...settings}>
                        {banner && banner.map((item,index) => (
                            <div key={index} className="!flex justify-center items-center">
                                <Image
                                    className="rounded-lg"
                                    imgsrc={item.banner}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="flex xl:w-[25%] flex-col gap-4">
                <div className=" bg-[#162655] h-fit p-5 rounded-2xl text-center">
                    <Image
                        className="w-24 h-24 rounded-full mx-auto"
                        imgsrc={
                            loginUser && loginUser.profile
                                ? loginUser.profile
                                : profile
                        }
                    />
                    <h2 className=" font-rb font-bold text-2xl mt-5 text-white">
                        Welcome {loginUser.name}
                    </h2>
                    <p className=" font-rb font-bold mt-2 text-white">
                        ID: {loginUser.student_id}
                    </p>
                    <p className=" font-rb font-bold my-2 text-white">
                        Email: {loginUser.email}
                    </p>
                    <p className=" font-rb font-bold  mb-7 text-white">
                        Number: {loginUser.number}
                    </p>
                    <p className="bg-[#FFCC00] px-2 py-2 rounded font-rb">
                        Validity {loginUser.date}
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
