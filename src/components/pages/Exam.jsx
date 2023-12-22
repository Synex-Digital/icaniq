import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { questionid } from "../../../features/questionSlice";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
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
    const [indexid, setIndexID] = useState("");
    const [qusindexid, setQusIndexID] = useState(0);
    let show = useSelector((state) => state.counter.value);
    let qusid = useSelector((state) => state.queid.value);
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
                    "https://laraveladmin.icaniqbd.com/api/attempt",
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
                    "https://laraveladmin.icaniqbd.com/api/answer/submit",
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
                    "https://laraveladmin.icaniqbd.com/api/attempt",
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

    let lastlength = models.length;

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
                "https://laraveladmin.icaniqbd.com/api/answer/submit",
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
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
        setQuestion(item.id);
        setModelid(modeltestvaluse.id);
        setChoiceid(sitem.id);
        // console.log("qus", item.id);
        // console.log("mod", modeltestvaluse.id)
    };

    let hendleexamsubmit = async () => {
        try {
            let data = new FormData();
            data.append("model_id", modeltestvaluse.id);

            const response = await fetch(
                "https://laraveladmin.icaniqbd.com/api/answer/submit/done",
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

    let handlearrowleft = () => {
        if (qusid > 1) {
            let incre = qusid - 1;

            dispatch(questionid(incre));
            localStorage.setItem("questionid", JSON.stringify(incre));
        } 
    };

    let handlearrowright = () => {
        if (lastlength != qusid) {
            let incre = qusid + 1;
            dispatch(questionid(incre));
            localStorage.setItem("questionid", JSON.stringify(incre));
        }
    };

    let handlequstionindex = (item) => {
        dispatch(questionid(item.index));
        localStorage.setItem("questionid", JSON.stringify(item.index));
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
                <div className="flex gap-2">
                    {models.map((item, index) => (
                        <div key={index} className="cursor-pointer font-rb text-lg font-medium">
                            <p
                                className={` ${
                                    qusid == item.index &&
                                    "bg-[#e6d414] text-white border border-[#e6d414]"
                                }   
                                 ${
                                     item.exam_status &&
                                     "bg-[#21BA45] text-white border border-[#21BA45]"
                                 } border rounded-sm py-1 px-3`}
                                onClick={() => handlequstionindex(item)}
                            >
                                {index + 1}
                            </p>
                        </div>
                    ))}
                </div>
                {models.map(
                    (item, index) =>
                        qusid == item.index && (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <div>
                                    <GoArrowLeft
                                        className="border border-[#705BCC] rounded-full p-3 text-lg w-12 h-12 text-[#705BCC]  cursor-pointer mr-7"
                                        onClick={() => handlearrowleft(item)}
                                    />
                                </div>
                                <div className="border rounded-lg relative mt-4 p-2 sm:p-4 sm:w-1/2">
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
                                {lastlength != qusid ? (
                                    <div>
                                        <GoArrowRight
                                            className="border border-[#705BCC] rounded-full p-3 text-lg w-12 h-12 text-[#705BCC]  cursor-pointer ml-7"
                                            onClick={() =>
                                                handlearrowright(item)
                                            }
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            onClick={hendleexamsubmit}
                                            className="border bg-[#21BA45] border-[#21BA45]  p-3 text-lg font-semibold text-white  cursor-pointer ml-7"
                                        >
                                            {" "}
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                )}
            </div>
        </section>
    );
};

export default Exam;
