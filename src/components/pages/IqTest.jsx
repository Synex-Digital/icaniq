import React, { useState } from "react";
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
        backgroundColor: 'rgba(12, 12, 12, 0.85)'
      },
};

const IqTest = (props) => {
    let navigate = useNavigate()
    let show = useSelector((state) => state.counter.value);

    // let handletextstart = () => {
    //     console.log("ok");
    // };
    const [modalIsOpen, setIsOpen] = useState(false);

    let openModal = () => {
        setIsOpen(true);
    };

    let closeModal = () => {
        setIsOpen(false);
    };
    let handleexamstart=()=>{
        navigate("/user/exam")
    }
    return (
        <>
            <section
                className="mt-16 flex xl:justify-end p-4 mx-auto"
            >
                <div className={`flex xl:justify-end gap-x-4 flex-wrap gap-y-4 ${
                    show ? "xl:w-[86.2%]" : "xl:w-[98%]"
                }`}>
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 1"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                        onclick={openModal}
                    />
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 2"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                    />
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 3"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                    />
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 4"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                    />
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 5"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                    />
                    <Module
                        updatetime="Updated by 1day ago"
                        modulename="Module 6"
                        moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                        questionnumber="100"
                        durationtime="1"
                    />
                </div>
            </section>
            <div>
                <Modal
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
                        <button onClick={handleexamstart} className="w-[48%] text-[#3888F9] border rounded border-[#3888F9] transition duration-300 ease-in-out py-2 px-6 hover:bg-[#3888F9] hover:text-white text-lg font-rb font-semibold">
                            Start
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default IqTest;
