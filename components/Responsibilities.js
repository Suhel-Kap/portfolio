import React from "react";
import userData from "@constants/data";

export default function Responsibilities() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
                    Responsibilities
                </h1>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
                    {/* Responsibility card */}
                    {userData.responsibilities.map((resp, idx) => (
                        <>
                            <ResponsibilityCard
                                key={idx}
                                title={resp.title}
                                desc={resp.desc}
                                year={resp.year}
                                company={resp.company}
                            />
                            {idx === userData.responsibilities.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ResponsibilityCard = ({ title, desc, year, company }) => {
    const lines = desc.split('\n');
    return (
        <div className="relative responsibility-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
                {year}
            </h1>
            <h1 className="font-semibold text-xl">{title}</h1>
            <a href={company} className="text-gray-500">
                {company}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index !== desc.length - 1 && <br />}
                </React.Fragment>
            ))}
            </p>
        </div>
    );
}