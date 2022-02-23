import React from "react";

export default function Certificates() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Certificates
                </h1>
            </div>
            {/* Grid starts here */}
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                    <CertificateCard
                        title="Bits and Bytes of Networking"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/coursera_networking_google.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                    <CertificateCard
                        title="Tech Support Fundamentals"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/tech_support_fundamentals.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                    <CertificateCard
                        title="Python Data Structures"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/coursera_data_structures.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                    <CertificateCard
                        title="Data Structures and Algorithms"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/jovian_dsa.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                    <CertificateCard
                        title="Full Stack Web Development"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/udemy_web_dev.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                    <CertificateCard
                        title="Cloud Facilitator"
                        imgUrl="https://raw.githubusercontent.com/Suhel-Kap/portfolio/main/public/cloud_facilitator.png"
                        link="https://www.linkedin.com/in/suhel-kapadia/"
                    />
                </div>
            </div>
        </section>
    );
}

const CertificateCard = ({ title, imgUrl, link }) => {
    return (
        <a href={link} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    {title}
                </h1>
            </div>
        </a>
    );
}