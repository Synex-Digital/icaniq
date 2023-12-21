import React from "react";
import { useSelector } from "react-redux";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const Show = () => {
    let result = useSelector((state) => state.examresult.value);
    console.log(result);
    return (
        <section className=" mt-16 p-4 w-full">
            {result.map((item, index) => (
                <div key={index} className="mt-[30px]">
                    <h2 className="font-rb text-2xl font-semibold flex gap-x-2 items-center">
                        {item.question_test_text} <span>{item.is_correct == 1 ? <CiCircleCheck className="text-green-800 text-lg"/>:<RxCrossCircled className="text-red-800 text-lg"/>}</span>
                    </h2>
                    <div className="flex flex-wrap mt-6 gap-x-4 gap-y-5">
                        {item.choices &&
                            item.choices.map((sitem) => (

                                <p
                                    key={sitem.id}
                                    className={`${
                                        !item.is_correct
                                            ? item.wrong_id == sitem.id
                                                ? "text-white bg-[#f91f1f]"
                                                :sitem.is_correct == 1 ?"bg-green-400 text-white": "text-black"
                                            : item.correct_id == sitem.id
                                            ? "bg-green-400 text-white"
                                            : "text-black"
                                    } w-[48%] p-3 border font-rb text-lg`}
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
