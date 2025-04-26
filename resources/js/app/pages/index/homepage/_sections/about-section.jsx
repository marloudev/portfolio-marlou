export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden">
            {/* <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div> */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white">
                            About Me
                        </h2>
                        <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-300">
                            I am a dedicated and versatile full stack developer
                            with a passion for creating efficient and
                            user-friendly web applications. With 3 years of
                            professional experience and 7 years overall in
                            Software Development. I have worked with a variety
                            of technologies, including ReactJs, Redux, and
                            Tailwind CSS, combined with back-end experience in
                            Laravel. My journey in web development began with a
                            deep curiosity for how things work, and it has
                            evolved into a career where I continuously strive to
                            learn and adapt to new challenges. I thrive in
                            collaborative environments and enjoy solving complex
                            problems to deliver high-quality solutions. Outside
                            of coding, I enjoy staying active and exploring new
                            technologies.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/about-me.jpeg"
                            width={300}
                            height={100}
                            className="w-full max-w-sm h-auto"
                            alt="About Me"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
