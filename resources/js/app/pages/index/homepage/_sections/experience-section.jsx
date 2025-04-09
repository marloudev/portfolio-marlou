import { Link } from "@inertiajs/react";
import moment from "moment";

const posts = [
    {
        id: 1,
        title: "EmpireOne HRIS",
        href: "https://empireone-hris.com",
        description:
            "EmpireOne HRIS integrates seamless recruitment tools that allow you to post job openings, track applicants, and manage the interview process. From entry-level roles like call center agents to specialized positions, EmpireOne helps you find the right fit quickly.\n\nKeep track of all candidate interactions, including resumes, assessments, and interview notes, all in one place. The platform provides a centralized dashboard to streamline candidate screening and selection.",
        imageUrl: "/images/project.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
    },
    {
        id: 2,
        title: "EmpireOne Financing",
        href: "https://empireone-finance.com",
        description:
            "The EmpireOne Financing platform is a comprehensive, user-friendly solution designed to provide employees with access to financial assistance in the form of loans, once they have completed their regularization period. With streamlined loan application processes, secure e-signature capabilities, and flexible repayment options, this system helps enhance employee satisfaction while promoting financial well-being.Employees become eligible to apply for a loan once they have successfully completed their regularization period, ensuring that only qualified employees benefit from the program",
        imageUrl: "/images/project.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
    },
    {
        id: 3,
        title: "Empireone IT Ticketing System",
        href: "https://eo-iticketing.com",
        description:
            "The EmpireOne IT Ticketing System is a robust, intuitive platform designed to streamline IT support processes, ensuring that agents and employees can efficiently report and resolve technical issues. With seamless ticket creation, real-time ticket tracking, and powerful troubleshooting capabilities, the system enhances productivity and ensures timely resolution of IT-related problems. As soon as a ticket is created, the IT support team receives a real-time notification, ensuring no issue goes unnoticed or unresolved.",
        imageUrl: "/images/project.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
    },
    {
        id: 4,
        title: "Curtis CRM",
        href: "https://curtis-css.com",
        description:
            "CURTIS Customer Relationship Management (CRM) system is designed to streamline and enhance the post-purchase experience by integrating powerful features for managing warranty claims, refunds, and replacements. With these functionalities, businesses can efficiently handle customer issues, ensure satisfaction, and maintain a strong relationship with their clients.",
        imageUrl: "/images/project.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
    },
    {
        id: 5,
        title: "Blue Waves Sipaway",
        href: "https://bluewaves-sipaway.com",
        description:
            "Blue Waves Sipaway offers a tranquil island escape for families, couples, and adventure seekers. To enhance the guest experience, we developed a smooth online reservation system with integrated online payment options—making bookings faster, easier, and more secure.",
        imageUrl: "/images/project.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
    },
    {
      id: 6,
      title: "Colegio de Santa Rita de San Carlos, Inc.",
      href: "https://csr-grading-system.site",
      description:"Colegio de Santa Rita de San Carlos, Inc. prides itself on providing quality education with an efficient and transparent grading system. The institution aims to keep students, teachers, and parents informed about academic progress in real time through a modern and reliable grading solution.",
       imageUrl: "/images/project.png",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
  },
];

export default function ExperienceSection() {
    return (
        <div className="relative isolate overflow-hidden pb-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-6xl">
                    <p className="mt-2 text-5xl text-center font-semibold tracking-tight text-balance text-white sm:text-6xl">
                        My Portfolio
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative h-auto isolate flex flex-col md:flex-row gap-6 bg-white/5 rounded-2xl p-4 ring-1 ring-white/10 transform transition duration-300 ease-in-out hover:scale-[1.02] hover:ring-white"
                                >
                                <div className="relative aspect-[16/9] md:aspect-square md:w-40 flex-shrink-0">
                                    <img
                                        alt={post.title}
                                        src={post.imageUrl}
                                        className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time
                                                dateTime={post.datetime}
                                                className="text-gray-400"
                                            >
                                                {moment(post.date).format("LL")}
                                            </time>
                                            <a
                                                target="_blank"
                                                href={post.href}
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100"
                                            >
                                                SHOW THIS PROJECT
                                            </a>
                                        </div>

                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-4 text-sm leading-6 text-white line-clamp-5">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
