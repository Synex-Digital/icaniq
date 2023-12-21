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
    const [models, setModels] = useState([]);
    const [question, setQuestion] = useState("");
    const [choiceid, setChoiceid] = useState("");
    const [modelid, setModelid] = useState("");
    const [examcount, setExamCount] = useState("");
    let show = useSelector((state) => state.counter.value);
    let qusid = useSelector((state) => state.queis.value);
    let examQuestion = useSelector((state) => state.question.Question);
    let modeltestvaluse = useSelector((state) => state.userModelTest.values);
    let loginUser = useSelector((state) => state.loggedUser.loginUser);
    let userToken = useSelector((state) => state.tokened.Token);
    let examId = useSelector((state) => state.examid.id);

    useEffect(() => {
        async function fetchData() {
            try {
                let data = new FormData();
                data.append("model_id", examId);

                const response = await fetch(
                    "http://icaniq.synexdigital.com/api/attempt",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: "application/json",
                        },
                        body: data,
                    }
                );

                const responseData = await response.json();
                setModels(responseData.data);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        }
        fetchData();
        async function fetchDatatwo() {
            try {
                let data = new FormData();
                data.append("choice_id", choiceid);
                data.append("question_id", question);
                data.append("model_id", modeltestvaluse.id);

                const response = await fetch(
                    "http://icaniq.synexdigital.com/api/answer/submit",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: "application/json",
                        },
                        body: data,
                    }
                );

                const responseData = await response.json();
                // console.log("time",responseData);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        }
        fetchDatatwo();
        async function fetchDatathree() {
            try {
                let data = new FormData();
                data.append("model_id", examId);

                const response = await fetch(
                    "http://icaniq.synexdigital.com/api/attempt",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: "application/json",
                        },
                        body: data,
                    }
                );

                const responseData = await response.json();
                setExamCount(responseData.exam_time);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        }
        fetchDatathree();
    }, [modelid, choiceid, question]);

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

    let lastlength = examQuestion.length;

    const pageCount = Math.ceil(examQuestion.length / 1);

    const handlePageClick = (event) => {
        dispatch(questionid(event.selected + 1));
    };

    if (examcount == "") {
        return;
    }

    const time = new Date();
    time.setSeconds(time.getSeconds() + examcount);

    let hendlesubmit = async (sitem, item) => {
        try {
            let data = new FormData();
            data.append("choice_id", sitem.id);
            data.append("question_id", item.id);
            data.append("model_id", modeltestvaluse.id);

            const response = await fetch(
                "http://icaniq.synexdigital.com/api/answer/submit",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        Accept: "application/json",
                    },
                    body: data,
                }
            );

            const responseData = await response.json();
            console.log("ok", responseData);
            console.log(models);
            console.log(qusid);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
        setQuestion(item.id);
        setModelid(modeltestvaluse.id);
        setChoiceid(sitem.id);
        // console.log("qus", item.id);
        // console.log("mod", modeltestvaluse.id);
        console.log("cho", sitem);
    };

    let hendleexamsubmit = async () => {
        try {
            let data = new FormData();
            data.append("model_id", modeltestvaluse.id);

            const response = await fetch(
                "http://icaniq.synexdigital.com/api/answer/submit/done",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        Accept: "application/json",
                    },
                    body: data,
                }
            );

            const responseData = await response.json();
            navigate("/user/iqtest");
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
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
                        <div className="flex items-center justify-center gap-x-4 text-lg font-rb rounded-2xl">
                            <LuMoveLeft className="text-2xl" />
                        </div>
                    }
                    nextLabel={
                        qusid == lastlength ? (
                            <div
                                onClick={hendleexamsubmit}
                                className="flex items-center justify-center gap-x-4 text-lg font-rb "
                            >
                                Submit
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-x-4 text-lg font-rb ">
                                <LuMoveRight className="text-2xl" />
                            </div>
                        )
                    }
                    pageLinkClassName="text-lg flex items-center justify-center font-rb border border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer"
                    previousLinkClassName="absolute -bottom-[85px] left-0 sm:left-[50px] lg:left-[230px] xl:left-[295px] border-[#3888F9] border w-[150px] p-3 xl:w-[15%] hover:bg-[#1F7CFF] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    nextLinkClassName="absolute -bottom-[85px] xl:right-[295px] sm:right-[50px] lg:right-[230px] border-[#3888F9] right-0 border p-3 w-[150px] xl:w-[15%] hover:bg-[#1F7CFF] text-center text-lg font-rb bg-[#3888F9] text-white font-semibold rounded"
                    containerClassName="flex flex-wrap gap-x-2 gap-y-2"
                    activeClassName="flex items-center justify-center text-lg font-rb border bg-[#FFCC00] border-[#FFCC00] p-2 rounded w-[45px] h-[35px] text-center cursor-pointer "
                    renderOnZeroPageCount={null}
                />
                {models.map(
                    (item, index) =>
                        index + 1 == qusid && (
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
                                                    className={`
                                                    ${
                                                        sitem.exam_status
                                                            ? "border rounded bg-green-400 border-[#36ff40] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0c0c0c] mx-auto cursor-pointer w-[98%]"
                                                            : "border rounded border-[#292055] font-rb sm:text-lg py-2 px-2 sm:px-6  text-[#0C0C0C] mx-auto cursor-pointer w-[98%]"
                                                    }`}
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
