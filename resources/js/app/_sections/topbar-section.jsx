import React from "react";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../redux/app-slice";
import {
    Bars3Icon,
    BellIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@inertiajs/react";

export default function TopbarSection({ userNavigation }) {
    const dispatch = useDispatch();

    return (
        <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-0">
            <div className="flex h-16 items-center gap-x-4 border-b shadow-md border-gray-300 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
                <button
                    type="button"
                    onClick={() => dispatch(setSidebarOpen(true))}
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                {/* Separator */}
                <div
                    aria-hidden="true"
                    className="h-6 w-px bg-gray-200 lg:hidden"
                />

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 px-8">
                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form action="#" className="relative flex flex-1">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            />
                            <input
                                id="search-field"
                                name="search"
                                type="search"
                                placeholder="Search..."
                                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            {/* Separator */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                            />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <Link
                                            method="post"
                                            as="button"
                                            href={route("logout")}
                                            className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                        >
                                            Logout
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Separator */}
                        <div
                            aria-hidden="true"
                            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                        />

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-8 rounded-full bg-gray-50"
                                />
                                <span className="hidden lg:flex lg:items-center">
                                    <span
                                        aria-hidden="true"
                                        className="ml-4 text-sm/6 font-semibold text-gray-900"
                                    >
                                        Tom Cook
                                    </span>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="ml-2 size-5 text-gray-400"
                                    />
                                </span>
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                {userNavigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        <a
                                            href={item.href}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                        >
                                            {item.name}
                                        </a>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}
