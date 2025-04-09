import React from "react";

export default function Input({
    label,
    name,
    value,
    onChange,
    type = "text",
    disabled = false,
    required = false,
    iconLeft,
    iconRight,
    error,
}) {
    return (
        <div className="w-full">
            <div className="relative">
                {/* Left Icon */}
                {iconLeft && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                        {iconLeft}
                    </div>
                )}

                {/* Input */}
                <input
                    disabled={disabled}
                    required={required}
                    value={value}
                    onChange={onChange}
                    type={type}
                    id={name}
                    name={name}
                    className={`peer text-black placeholder-transparent w-full py-2.5 px-5 border bg-white rounded-md focus:outline-none transition-all
            ${iconLeft ? "pl-10" : ""}
            ${iconRight ? "pr-10" : ""}
            ${error ? "border-red-500" : ""}
          `}
                    placeholder=" "
                />

                {/* Floating Label */}
                <label
                    htmlFor={name}
                    className={`ml-5 absolute left-2.5 px-2.5 transition-all bg-white text-sm -top-3
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:top-2.5
            peer-focus:-top-3
            peer-focus:text-sm
            peer-focus:text-blue-600 
          `}
                >
                    {label}
                </label>

                {/* Right Icon */}
                {iconRight && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                        {iconRight}
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500 mt-1 ml-1">{error}</p>}
        </div>
    );
}
