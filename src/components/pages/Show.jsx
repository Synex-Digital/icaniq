import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Show = () => {
    let navigate = useNavigate();
    let result = useSelector((state) => state.examresult.value);

    if (result == null) {
        navigate("/user/result");
        return;
    }


    return (
        <section className=" mt-16 p-4 w-full">
            {/* <div className="w-full flex items-center justify-center my-[30px]">
                <a className="py-3 px-8 bg-[#3888F9] font-rb text-xl font-semibold text-white cursor-pointer">Download Sheet</a>
            </div> */}
            <div className="w-full border-[4px] border-green-400 font-rb font-medium md:text-2xl text-xl p-5 uppercase">
                <p>
                    <span>Total Number: </span> {result.history.total}
                </p>
                <p className="text-green-400">
                    <span>Correct Answer: </span> {result.history.correct}
                </p>
                <p className="text-red-500">
                    <span>Incorrect: </span> {result.history.wrong}
                </p>
            </div>
            {result.data.map((item, index) => (
                <div key={index} className="mt-[30px]">
                    <h2 className="font-rb text-2xl font-semibold flex gap-x-2 items-center">
                        {item.question_test_text}{" "}
                        <span>
                            {item.is_correct == 1 ? (
                                <CiCircleCheck className="text-green-800 text-lg" />
                            ) : (
                                <RxCrossCircled className="text-red-800 text-lg" />
                            )}
                        </span>
                    </h2>
                    <div className="md:flex md:flex-wrap smalldevice:max-md:flex smalldevice:max-md:flex-col smalldevice:max-md:w-full mt-6 gap-x-4 gap-y-5">
                        {item.choices &&
                            item.choices.map((sitem) => (
                                <p
                                    key={sitem.id}
                                    className={`${
                                        !item.is_correct
                                            ? item.wrong_id == sitem.id
                                                ? "text-white bg-[#f91f1f]"
                                                : sitem.is_correct == 1
                                                ? "bg-green-400 text-white"
                                                : "text-black"
                                            : item.correct_id == sitem.id
                                            ? "bg-green-400 text-white"
                                            : "text-black"
                                    } md:w-[48%] p-3 border font-rb text-lg`}
                                >
                                    {sitem.choice_text}
                                </p>
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Show;
