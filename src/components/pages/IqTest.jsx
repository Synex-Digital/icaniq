import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Module from "../layout/Module";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-45%",
        transform: "translate(-50%, -50%)",
    },
    overlay: {
        backgroundColor: "rgba(12, 12, 12, 0.85)",
    },
};

const IqTest = (props) => {
    let navigate = useNavigate();
    Modal.setAppElement("#root");
    let show = useSelector((state) => state.counter.value);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [models, setModels] = useState([]);
    const [modelsId, setModelsId] = useState("");
    const [modelqusstatus, setModelQusStatus] = useState("");
    let userToken = useSelector((state) => state.tokened.Token);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://icaniq.synexdigital.com/api/model/test",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: "application/json",
                        },
                        // body: data,
                    }
                );

                const responseData = await response.json();
                setModels(responseData.modelTest);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        }
        fetchData();
    }, []);

    let openModal = (item) => {
        setIsOpen(true);
        setModelsId(item.id);
    };

    let closeModal = () => {
        setIsOpen(false);
    };
    let handleexamstart = async () => {
        try {
            const response = await fetch(
                `http://icaniq.synexdigital.com/api/model/request/${modelsId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        Accept: "application/json",
                    },
                }
            );

            const responseData = await response.json();
            setModelQusStatus(responseData.status);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
        setIsOpen(false);
    };
    return (
        <>
            <section className="mt-16 flex xl:justify-end p-4 mx-auto ">
                <div
                    className={`flex xl:justify-end gap-x-4 flex-wrap gap-y-4 ${
                        show ? "xl:w-[86.2%]" : "xl:w-[98%]"
                    }`}
                >
                    {models.map((item, i) => (
                        <div className="border p-5 rounded-2xl xl:w-[32%] sm:w-[48%] smalldevice:w-full shadow-md">
                            <Module
                                index={i}
                                updatetime="Updated by 1day ago"
                                modulename={item.title}
                                moduletext={item.note}
                                questionnumber="100"
                                durationtime={item.exam_time}
                                onclick={() => openModal(item)}
                            />
                            <button
                                onClick={props.onclick}
                                className="group font-rb font-bold text-lg text-center border py-[10px] w-full text-[#3888F9] rounded-lg border-[#3888F9] transition duration-300 ease-in-out hover:text-white hover:bg-[#3888F9]"
                            >
                                Resqust
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <div>
                <Modal
                    appElement={document.getElementById("root")}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <p className="sm:w-[456px] font-rb text-lg text-[#454545] mb-10">
                        The test is designed with 100 marks, each associated
                        with a distinct set of questions totaling 100. I retain
                        the flexibility to skip questions as desired.
                    </p>
                    <div className="flex justify-between">
                        <button
                            onClick={closeModal}
                            className="w-[48%] border text-[#3888F9] transition duration-300 ease-in-out border-[#3888F9] py-2 px-6 rounded hover:bg-[#3888F9] hover:text-white text-lg font-rb font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleexamstart}
                            className="w-[48%] text-[#3888F9] border rounded border-[#3888F9] transition duration-300 ease-in-out py-2 px-6 hover:bg-[#3888F9] hover:text-white text-lg font-rb font-semibold"
                        >
                            Start
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default IqTest;
