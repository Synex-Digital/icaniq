import React from "react";
import { useSelector } from "react-redux";
import Module from "../layout/Module";

const IqTest = (props) => {
    let show = useSelector((state) => state.counter.value);
    return (
        <section
            className={`mt-16 flex gap-x-4 flex-wrap gap-y-4 p-4 ${
                show ? "xl:ml-[200px]" : "xl:ml-[50px]"
            }`}
        >
            <Module
                updatetime="Updated by 1day ago"
                modulename="Module 1"
                moduletext="Lorem ipsum dolor sit amet consectetur. Feugiat consectetur
                lectus sagittis tincidunt."
                questionnumber="100"
                durationtime="1"
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
        </section>
    );
};

export default IqTest;
