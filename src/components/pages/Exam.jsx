import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { Question } from "../../../data/data";
import { questionid } from "../../../features/questionSlice";
import { LuMoveRight } from "react-icons/lu";

const Exam = () => {
    let dispatch = useDispatch();
    let show = useSelector((state) => state.counter.value);
    let qusid = useSelector((state) => state.queis.value);
    const pageCount = Math.ceil(Question.length / 1);

    const handlePageClick = (event) => {
        dispatch(questionid(event.selected + 1));
    };

    return (
        <section className="mt-16 flex  xl:justify-end p-4 mx-auto ">
            <div
                className={` gap-x-4 gap-y-4 relative  ${
                    show ? "xl:w-[85%]" : "xl:w-[96%]"
                }`}
            >
                <h2 className=" font-rb font-bold text-2xl mb-6 ">
                    IQ Test 01
                </h2>
                <ReactPaginate
                    breakLabel="..."
                    breakClassName="text-2xl font-bold"
                    breakLinkClassName=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={35}
                    pageCount={pageCount}
                    pageClassName="text-lg flex items-center justify-center font-rb border border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer"
                    previousClassName="absolute xl:-bottom-[85px] xl:left-[295px] border-[#3888F9] border p-3 w-[15%] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    nextClassName="absolute xl:-bottom-[85px] xl:right-[295px] border-[#3888F9] border p-3 w-[15%] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    containerClassName="flex flex-wrap gap-x-2 gap-y-2"
                    activeClassName="flex items-center justify-center text-lg font-rb border bg-[#FFCC00] border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer "
                    renderOnZeroPageCount={null}
                />

                {Question.map(
                    (item) =>
                        qusid == item.id && (
                            <>
                                <div className="border rounded-lg relative mt-10 sm:mt-16 sm:w-[515px] p-2 sm:p-5 mx-auto">
                                    <h2 className=" font-rb font-semibold text-xl sm:text-2xl text-center mb-5">
                                        {item.name}
                                    </h2>
                                    <div className="flex flex-wrap gap-y-4  sm:gap-y-4 ">
                                        {item.answer &&
                                            item.answer.map((sitem, index) => (
                                                <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0C0C0C] mx-auto cursor-pointer">
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
