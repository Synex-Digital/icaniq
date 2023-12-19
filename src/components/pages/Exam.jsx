import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { questionid } from "../../../features/questionSlice";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";
import ExamTime from "../layout/ExamTime";
import { useNavigate } from "react-router-dom";

const Exam = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let show = useSelector((state) => state.counter.value);
    let qusid = useSelector((state) => state.queis.value);
    let examQuestion = useSelector((state) => state.question.Question);
    let modeltestvaluse = useSelector((state) => state.userModelTest.values);
    let loginUser = useSelector((state) => state.loggedUser.loginUser);
    let userToken = useSelector((state) => state.tokened.Token);

    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         async function fetchData() {
    //             try {
    //                 const response = await fetch(
    //                     "http://icaniq.synexdigital.com/api/model/test",
    //                     {
    //                         method: "GET",
    //                         headers: {
    //                             Authorization: `Bearer ${userToken}`,
    //                             Accept: "application/json",
    //                         },
    //                     }
    //                 );

    //                 const responseData = await response.json();
    //                 console.log(responseData);
    //                 // setModels(responseData.modelTest);
    //             } catch (error) {
    //                 console.error("Login error:", error);
    //                 throw error;
    //             }
    //         }
    //         fetchData();
    //       }, 1000);

    //       return () => clearInterval(10);

    // },[])

    // useEffect(() => {
    //     // Function to be executed every 1 second
    //     const fetchData = () => {
    //       // Your logic here
    //       console.log('Effect is running');
    //     };

    //     // Call the fetchData function immediately (on mount)
    //     fetchData();

    //     // Set up an interval to call fetchData every 1 second
    //     const intervalId = setInterval(fetchData, 1000);

    //     // Clean up the interval when the component is unmounted or when a specific condition is met
    //     return () => {
    //       clearInterval(intervalId);
    //       console.log('Interval is cleared');
    //     };
    //   }, []);

    useEffect(() => {
        if (loginUser == null) {
            navigate("/");
        }
    }, []);

    if (loginUser == null) {
        navigate("/");
        return;
    }
    if (modeltestvaluse == null) {
        navigate("/user/iqtest");
        return;
    }
    if (examQuestion == null) {
        navigate("/user/iqtest");
        return;
    }

    const pageCount = Math.ceil(examQuestion.length / 1);

    const handlePageClick = (event) => {
        dispatch(questionid(event.selected + 1));
    };

    const time = new Date();
    // time.setSeconds(time.getSeconds() + 60 * +modeltestvaluse.exam_time); 
    time.setSeconds(time.getSeconds() + 2); 

    let hendlesubmit = async (sitem, item) => {
        // console.log("cho", sitem);
        console.log("qus", item);
        // console.log("mod", modeltestvaluse);
        // try {
        //     let data = new FormData();
        //     data.append("choice_id", sitem.id);
        //     data.append("question_id", item.id);
        //     data.append("model_id", modeltestvaluse.id);

        //     const response = await fetch(
        //         "http://icaniq.synexdigital.com/api/answer/submit",
        //         {
        //             method: "POST",
        //             headers: {
        //                 Authorization: `Bearer ${userToken}`,
        //                 Accept: "application/json",
        //             },
        //             body: data,
        //         }
        //     );

        //     const responseData = await response.json();
        //     console.log(responseData);
        // } catch (error) {
        //     console.error("Login error:", error);
        //     throw error;
        // }
    };

    return (
        <section className="mt-16  p-4 mx-auto ">
            <div className=" relative">
                <div className="flex justify-between">
                    <h2 className=" font-rb font-bold text-2xl mb-4 ">
                        {modeltestvaluse.title}
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
                    pageRangeDisplayed={100}
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
                {examQuestion.map(
                    (item, index) =>
                        item.id == qusid && (
                            <div key={index}>
                                <div className="border rounded-lg relative mt-4 p-2 sm:p-4 mx-auto sm:w-1/2">
                                    <div className="mb-4 flex justify-center items-center gap-x-3">
                                        {item.question_test_image && (
                                            <img
                                                className="w-[160px] h-[160px]"
                                                src={item.question_test_image}
                                            />
                                        )}
                                        <h2 className=" font-rb font-semibold text-xl sm:text-2xl text-center">
                                            {item.question_test_text}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-y-4 ">
                                        {item.choices &&
                                            item.choices.map((sitem, index) => (
                                                <p
                                                    key={sitem.id}
                                                    className="border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0C0C0C] mx-auto cursor-pointer w-[98%]"
                                                    onClick={() =>
                                                        hendlesubmit(
                                                            sitem,
                                                            item
                                                        )
                                                    }
                                                >
                                                    {index + 1}.{" "}
                                                    {sitem.choice_text}
                                                </p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </section>
    );
};

export default Exam;
