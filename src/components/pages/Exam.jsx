import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { Question } from "../../../data/data";
import { questionid } from "../../../features/questionSlice";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";
import ExamTime from "../layout/ExamTime";

const Exam = () => {
    let dispatch = useDispatch();
    let show = useSelector((state) => state.counter.value);
    let qusid = useSelector((state) => state.queis.value);
    const pageCount = Math.ceil(Question.length / 1);

    const handlePageClick = (event) => {
        dispatch(questionid(event.selected + 1));
    };

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10); // 10 minutes timer 3599

    return (
        <section className="mt-16 flex  xl:justify-end p-4 mx-auto ">
            <div
                className={` gap-x-4 gap-y-4 relative  ${
                    show ? "xl:w-[85%]" : "xl:w-[96%]"
                }`}
            >
                <div className="flex justify-between">
                    <h2 className=" font-rb font-bold text-2xl mb-4 ">
                        IQ Test 01
                    </h2>
                    <time>
                        <ExamTime expiryTimestamp={time} />
                    </time>
                </div>
                <ReactPaginate
                    breakLabel="..."
                    breakClassName="text-2xl font-bold"
                    breakLinkClassName=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={35}
                    pageCount={pageCount}
                    previousLabel={
                        <div className="flex items-center justify-center gap-x-4 text-lg font-rb">
                            <LuMoveLeft className="text-2xl" />
                            Previous
                        </div>
                    }
                    nextLabel={
                        <div className="flex items-center justify-center gap-x-4 text-lg font-rb ">
                            Next
                            <LuMoveRight className="text-2xl" />
                        </div>
                    }
                    pageLinkClassName="text-lg flex items-center justify-center font-rb border border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer"
                    previousLinkClassName="absolute -bottom-[85px] left-0 sm:left-[50px] lg:left-[230px] xl:left-[295px] border-[#3888F9] border w-[150px] p-3 xl:w-[15%] hover:bg-[#1F7CFF] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    nextLinkClassName="absolute -bottom-[85px] xl:right-[295px] sm:right-[50px] lg:right-[230px] border-[#3888F9] right-0 border p-3 w-[150px] xl:w-[15%] hover:bg-[#1F7CFF] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    containerClassName="flex flex-wrap gap-x-2 gap-y-2"
                    activeClassName="flex items-center justify-center text-lg font-rb border bg-[#FFCC00] border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer "
                    renderOnZeroPageCount={null}
                />
                {Question.map(
                    (item) =>
                        qusid == item.id && (
                            <>
                                <div className="border rounded-lg relative mt-4 p-2 sm:p-4 mx-auto sm:w-1/2">
                                    <div className="mb-4 flex justify-center items-center gap-x-3">
                                        {item.img && (
                                            <img
                                                className="w-[160px] h-[160px]"
                                                src={item.img}
                                            />
                                        )}
                                        <h2 className=" font-rb font-semibold text-xl sm:text-2xl text-center">
                                            {item.name}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-y-4 ">
                                        {item.answer &&
                                            item.answer.map((sitem, index) => (
                                                <p className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0C0C0C] mx-auto cursor-pointer w-[98%]">
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
