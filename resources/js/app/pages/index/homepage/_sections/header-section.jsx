import { useState, Fragment } from "react";
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
    Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function HeaderSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const path = window.location.pathname.split("/")[1];
    console.log("path", path);

    const navigation = [
        { name: "Home", href: "/", isActive: path == "" },
        { name: "About", href: "/about", isActive: path == "about" },
        { name: "Service", href: "/service", isActive: path == "service" },
        {
            name: "Portfolio",
            href: "/portfolio",
            isActive: path == "portfolio",
        },
        // {
        //     name: "My Team",
        //     href: "/my_team",
        //     isActive: path == "my_team",
        // },
        {
            name: "Contact Me",
            href: "/contact_me",
            isActive: path == "contact_me",
        },
    ];
    return (
        <header>
            <nav
                className="mx-auto fixed w-full z-20 bg-black flex  items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden w-full items-start">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`${item.isActive?"border-b-4":""} text-sm font-semibold leading-6 text-white`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </PopoverGroup>
            </nav>

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10 lg:hidden"
                    onClose={setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition duration-500 ease-out"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition duration-500 ease-in"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="fixed inset-0  bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-start">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition duration-500 ease-out"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition duration-500 ease-in"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <DialogPanel className="w-full max-w-sm bg-black px-6 py-6 sm:ring-1 sm:ring-white/10">
                                    <div className="flex items-center justify-between">
                                        <Link href="#" className="-m-1.5 p-1.5">
                                            <span className="sr-only">
                                                Your Company
                                            </span>
                                            <img
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt=""
                                                className="h-8 w-auto"
                                            />
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className="-m-2.5 rounded-md p-2.5 text-white"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`${item.isActive?"border-b-4":""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white `}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </header>
    );
}
