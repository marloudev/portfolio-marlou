import React from "react";

export default function AboutMeSection() {
    return (
        <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 sm:pt-16 lg:px-8 lg:pt-16">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                            About Me
                        </h1>
                        <div className="mt-8 space-y-6 text-lg font-medium text-pretty text-white sm:max-w-md sm:text-xl/8 lg:max-w-none">
                            <p className="indent-8">
                                Hi! I'm <strong>Marlou F. Pepito</strong>, a
                                committed and enthusiastic Software Engineer
                                with a Bachelor of Science in Information
                                Technology degree from Central Philippine State
                                University, San Carlos City, Negros Occidental.
                            </p>
                            <p>
                                I have a solid background in software
                                development and excel at creating effective,
                                scalable, and user-centric applications. I enjoy
                                transforming complex issues into
                                straightforward, elegant solutions using clean
                                code and thoughtful design.
                            </p>
                            <p>
                                I'm driven by curiosity and a passion for
                                continuous learning — always seeking new
                                technologies to enhance my skills and deliver
                                better results. Whether working solo or in a
                                team, I take pride in producing high-quality,
                                impactful software.
                            </p>
                            {/* <p>
                                    <strong>🛠️ Technical Skills</strong><br />
                                    <strong>Languages:</strong> Java, JavaScript (Node.js, React), PHP (Laravel), Python<br />
                                    <strong>Frameworks:</strong> Laravel, Spring Boot, Express.js<br />
                                    <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB<br />
                                    <strong>Tools:</strong> Git, Docker, Postman, VS Code<br />
                                    <strong>Cloud & DevOps:</strong> AWS, Firebase, GitHub Actions
                                </p> */}
                        </div>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <ImageBlock src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&h=528&q=80" />
                        </div>
                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <ImageBlock src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&h=528&q=80" />
                            <ImageBlock src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" />
                        </div>
                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <ImageBlock src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&auto=format&fit=crop&crop=left&w=400&h=528&q=80" />
                            <ImageBlock src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&auto=format&fit=crop&h=528&q=80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageBlock({ src }) {
    return (
        <div className="relative">
            <img
                alt=""
                src={src}
                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
        </div>
    );
}
