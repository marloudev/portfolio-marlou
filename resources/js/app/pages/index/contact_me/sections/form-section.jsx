import { store_contact_form_service } from "@/app/services/contact-form-service";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function FormSection() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        await store_contact_form_service(data);
        reset();
        Swal.fire({
            icon: "success",
            title: "Form Submitted Successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 pb-24 sm:pb-32 mt-12 lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name Field */}
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first_name"
                                {...register("first_name", {
                                    required: "First name is required",
                                })}
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                            />
                            {errors.first_name && (
                                <p className="text-sm text-red-400">
                                    {errors.first_name.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Last Name Field */}
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last_name"
                                {...register("last_name", {
                                    required: "Last name is required",
                                })}
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                            />
                            {errors.last_name && (
                                <p className="text-sm text-red-400">
                                    {errors.last_name.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-400">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Mobile Number Field */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="mobile"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Mobile number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="mobile"
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^[0-9]{10,15}$/,
                                        message: "Enter a valid phone number",
                                    },
                                })}
                                type="tel"
                                autoComplete="tel"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                            />
                            {errors.mobile && (
                                <p className="text-sm text-red-400">
                                    {errors.mobile.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message:
                                            "Message must be at least 10 characters long",
                                    },
                                })}
                                rows={4}
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                            />
                            {errors.message && (
                                <p className="text-sm text-red-400">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`rounded-md border-2 px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
                            isSubmitting
                                ? "bg-gray-500 border-gray-300 text-gray-300 cursor-not-allowed"
                                : "bg-black border-white text-white"
                        }`}
                    >
                        {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                </div>
            </div>
        </form>
    );
}
