import {
    CheckCircleIcon,
    InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function SchoolSection() {
    return (
        <div className="bg-black px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-white">
                <p className="text-base/7 font-semibold text-white">
                    Educational Background
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                    Central Philippine State University
                </h1>
                <p className="mt-6 text-xl/8">
                    Central Philippines State University is a public higher
                    education institution in the Philippines. Its main campus is
                    located in Kabankalan, Negros Occidental, and has 9 other
                    satellite campuses in different cities and municipalities in
                    the province.
                </p>
                <div className="mt-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">
                        📍School Location
                    </h2>
                    <div className="aspect-video w-full max-w-4xl rounded-sm overflow-hidden shadow-lg ring-1 ring-white/10">
                        <iframe
                            title="CPSU Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.325327150726!2d123.3589596!3d10.4463052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a93f4321fa90b3%3A0x5a32a445f78a1f2f!2sCentral%20Philippines%20State%20University%20-%20Don%20Justo%20V.%20Valmayor%20Campus!5e0!3m2!1sen!2sph!4v1712557207086!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            className="border-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
