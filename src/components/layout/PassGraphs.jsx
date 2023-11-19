import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    YAxis,
    ResponsiveContainer,
} from "recharts";
const data = [
    { name: "Apr", number: 120, pv: 2400, amt: 2400 },
    { name: "May", number: 100, pv: 2400, amt: 2400 },
    { name: "Jun", number: 360, pv: 2400, amt: 2400 },
    { name: "Jul", number: 380, pv: 2400, amt: 2400 },
    { name: "Aug", number: 450, pv: 2400, amt: 2400 },
    { name: "Sep", number: 380, pv: 2400, amt: 2400 },
    { name: "Oct", number: 210, pv: 2400, amt: 2400 },
    { name: "Nov", number: 240, pv: 2400, amt: 2400 },
    { name: "Dec", number: 550, pv: 2400, amt: 2400 },
];

const PassGraphs = (props) => {
    return (
        <div className=" border rounded-lg p-2 pb-[92px] lg:w-[49%] w-full h-[300px]">
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 30, right: 30, bottom: 20, left: 0 }}
                    style={{ background: props.bgcolor }}
                    className="rounded-lg "
                >
                    <Line
                        activeDot={{ r: 5 }}
                        dataKey="number"
                        stroke="#fff"
                        strokeWidth={3}
                    />
                    <CartesianGrid
                        stroke="#fff"
                        strokeDasharray="6"
                        vertical={false}
                    />
                    <YAxis
                        tick={{ fill: "white" }}
                        stroke=""
                        fontSize={14}
                        dx={-10}
                    />
                    <XAxis
                        tick={{ fill: "white" }}
                        stroke=""
                        dataKey="name"
                        fontSize={14}
                        dy={10}
                    />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
            <div className=" flex justify-between mt-4 border-b pb-2 mb-2">
                <h4 className=" font-rb font-semibold text-lg">{props.ratetilte}</h4>
                <select
                    className="border rounded-md font-rb text-sm text-[#5D5D5D]"
                    name="cars"
                    id="cars"
                >
                    <option value="volvo">All time</option>
                    <option value="saab">1 week</option>
                    <option value="opel">1 month</option>
                    <option value="audi">1 year</option>
                </select>
            </div>
            <time className="text-[#5D5D5D] font-rb text-sm">
                updated 4 min ago
            </time>
        </div>
    );
};

export default PassGraphs;
