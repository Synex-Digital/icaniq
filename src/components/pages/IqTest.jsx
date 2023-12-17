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
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
        setIsOpen(false);
    };
    return (
        <>
            <section
                className="flex xl:justify-center mt-16 p-4 w-full  "
            >
                <div
                    className={` ${
                        show ? "xl:w-[70%]" : "xl:w-[92%]"
                    } flex lg:max-xl:w-full gap-x-3 gap-y-3 flex-wrap`}
                >
                    {models.map((item) => (
                        <Module
                            updatetime="Updated by 1day ago"
                            modulename={item.title}
                            moduletext={item.note}
                            questionnumber="100"
                            durationtime={item.exam_time}
                            onclick={() => openModal(item)}
                        />
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
