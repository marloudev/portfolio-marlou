import { motion } from "framer-motion";
import React from "react";

export default function CoverSection() {
    return (
        <div className="relative isolate overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <motion.h1
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        Marlou Flores Pepito
                    </motion.h1>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        className="mt-6 text-lg leading-8 text-gray-300"
                    >
                        The capacity to learn is a gift; the ability to learn is
                        a skill;
                        <br /> the willingness to learn is a choice.
                        <br />
                    </motion.div>
                    <motion.div initial={{ x: -200 }} animate={{ x: 0 }}>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className=" font-semibold leading-6 text-white text-4xl"
                            >
                                Software Engineer
                            </a>
                        </div>
                    </motion.div>
                    <br />
                    <a
                        type="submit"
                        target="_blank"
                        href="/pdf/MarlouPepito-CV.pdf"
                        className="rounded-md bg-black border-2 border-white px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        OPEN C.V.
                    </a>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <motion.div initial={{ x: 400 }} animate={{ x: 0 }}>
                            <img
                                alt="App screenshot"
                                src="/images/pp.jpeg"
                                className="w-[20rem] h-[25rem] object-cover object-top rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
