import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaginatedItems from "../layout/PaginatedItems";
import { Question } from "../../../data/data";

const Exam = () => {
    let show = useSelector((state) => state.counter.value);
    let [id, setId] = useState("");

    useEffect(() => {
        setId(Question[0].id);
    }, []);

    let handleid = (item) => {
        setId(item.id);
    };
    return (
        <section className="mt-16 flex  xl:justify-end p-4 mx-auto">
            <div
                className={` gap-x-4 gap-y-4 ${
                    show ? "xl:w-[85%]" : "xl:w-[96%]"
                }`}
            >
                <h2 className=" font-rb font-bold text-2xl mb-6">IQ Test 01</h2>
                <div className="flex gap-x-2 gap-y-2 flex-wrap">
                    {Question.map((item, index) => (
                        <div
                            onClick={() => handleid(item)}
                            className={`font-rb border border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer ${
                                item.id == id
                                    ? " bg-[#FFCC00]"
                                    : "border-[#FFCC00]"
                            }`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                {/* <PaginatedItems itemsPerPage={4} /> */}

                {Question.map(
                    (item) =>
                        id == item.id && (
                            <>
                                <div className="border rounded-lg relative mt-10 sm:mt-16 sm:w-[515px] p-2 sm:p-5 mx-auto">
                                    <h2 className=" font-rb font-semibold text-xl sm:text-2xl text-center mb-5">
                                        {item.name}
                                    </h2>
                                    <div className="flex flex-wrap gap-y-4  sm:gap-y-4 ">
                                        {item.answer &&
                                            item.answer.map((sitem, index) => (
                                                <p
                                                    className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0C0C0C] mx-auto cursor-pointer"
                                                >
                                                    {index + 1}. {sitem.name}
                                                </p>
                                            ))}
                                    </div>
                                </div>
                            </>
                        )
                )}
            </div>
        </section>
    );
};

export default Exam;
