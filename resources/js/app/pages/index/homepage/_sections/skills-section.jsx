import React from "react";

const skills = [
    { name: "Redux", percentage: 95, color: "#CA56F2" },
    { name: "Laravel", percentage: 95, color: "#FF6464" },
    { name: "ReactJS", percentage: 98, color: "#5185D4" },
    { name: "Flutter", percentage: 90, color: "#5185D4" },
    { name: "NodeJs", percentage: 80, color: "#68A063" },
];

export default function SkillsSection() {
    return (
        <div className="h-96 flex justify-center items-center dark:bg-gray-800">
            <div className="max-w-xl px-5 mx-auto w-full">
                {skills.map((skill, index) => {
                    const dash = `${(skill.percentage / 100) * 99}px, 100px`;

                    return (
                        <div key={index} className="mb-7">
                            <div className="flex justify-between py-1">
                                <span className="text-base text-gray-lite text-white font-semibold dark:text-[#A6A6A6]">
                                    {skill.name}
                                </span>
                                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                                    {skill.percentage}%
                                </span>
                            </div>

                            <svg
                                className="rc-progress-line"
                                viewBox="0 0 100 1"
                                preserveAspectRatio="none"
                            >
                                <path
                                    className="rc-progress-line-trail"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#D9D9D9"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                />
                                <path
                                    className="rc-progress-line-path"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke={skill.color}
                                    strokeWidth="1"
                                    fillOpacity="0"
                                    style={{
                                        strokeDasharray: dash,
                                        strokeDashoffset: "0px",
                                        transition:
                                            "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s",
                                    }}
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
