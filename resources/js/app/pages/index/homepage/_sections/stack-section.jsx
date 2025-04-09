import React from "react";
import ReduxLogo from "../_components/redux-logo";
import LaravelLogo from "../_components/laravel-logo";
import ReactLogo from "../_components/react-logo";
import FlutterLogo from "../_components/flutter-logo";
import NodeJsLogo from "../_components/nodejs-logo";
export default function StackSection() {
    return (
        <div className="relative isolate overflow-hidden">
            <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
                <h2 className="text-center text-5xl font-black leading-8 text-white">
                    Technologies
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <div className="flex items-center justify-center h-full duration-1000 animate-bounce [animation-delay:0ms]">
                        <ReduxLogo />
                    </div>
                    <div className="flex items-center justify-center h-full duration-1000 animate-bounce [animation-delay:100ms]">
                        <LaravelLogo />
                    </div>
                    <div className="flex items-center justify-center h-full duration-1000 animate-bounce [animation-delay:200ms]">
                        <ReactLogo />
                    </div>
                    <div className="flex items-center justify-center h-full duration-1000 animate-bounce [animation-delay:300ms]">
                        <FlutterLogo />
                    </div>
                    <div className="flex items-center justify-center h-full duration-1000 animate-bounce [animation-delay:400ms]">
                        <NodeJsLogo />
                    </div>
                </div>
            </div>
        </div>
    );
}
