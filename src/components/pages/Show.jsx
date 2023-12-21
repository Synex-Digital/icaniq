import React from "react";
import { useSelector } from "react-redux";

const Show = () => {
    let result = useSelector((state) => state.examresult.value);
    return (
        <section className=" mt-16 p-4 w-full">
            {result.map((item,index) => (
                <div key={index} className="mt-[30px]">
                    <h2 className="font-rb text-2xl font-semibold">
                        {item.question_test_text}
                    </h2>
                    <div className="flex flex-wrap mt-6 gap-x-4 gap-y-5">
                        {item.choices &&
                            item.choices.map((sitem) => (
                                <p key={sitem.id}
                                    className={`${
                                        !item.is_correct
                                            ? item.wrong_id == sitem.id
                                                ? "text-[#DB2828] bg-[#FBE9E9]"
                                                : "text-black"
                                            : item.correct_id == sitem.id
                                            ? "text-green-500"
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
