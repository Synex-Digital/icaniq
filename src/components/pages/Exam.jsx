import React from "react";
import { useSelector } from "react-redux";

let data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

const Exam = () => {
    let show = useSelector((state) => state.counter.value);
    return (
        <section className="mt-16 flex  xl:justify-end p-4 mx-auto">
            <div
                className={` gap-x-4 gap-y-4 ${
                    show ? "xl:w-[85%]" : "xl:w-[96%]"
                }`}
            >
                <h2 className=" font-rb font-bold text-2xl mb-6">IQ Test 01</h2>
                <div className="flex gap-x-2 gap-y-2 flex-wrap">
                    {data.map((item, index) => (
                        <div className="font-rb border border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center">
                            {index + 1}
                        </div>
                    ))}
                </div>
                <div className="border rounded-lg relative mt-10 sm:mt-16 max-w-[515px] p-2 sm:p-5 mx-auto">
                    <h2 className=" font-rb font-semibold text-xl sm:text-2xl text-center mb-5">
                        Which one is odd?
                    </h2>
                    <p className=" absolute top-2 right-2 sm:top-4 sm:right-4 font-rb text-lg text-[#8478DA] cursor-pointer">
                        Skip
                    </p>
                    <div className="flex flex-wrap gap-y-4  sm:gap-y-4 ">
                        <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6 text-[#0C0C0C] mx-auto">
                            Which one is odd?
                        </p>
                        <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6 text-[#0C0C0C] mx-auto">
                            Which one is odd?
                        </p>
                        <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6 text-[#0C0C0C] mx-auto">
                            Which one is odd?
                        </p>
                        <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6 text-[#0C0C0C] mx-auto">
                            Which one is odd?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exam;
