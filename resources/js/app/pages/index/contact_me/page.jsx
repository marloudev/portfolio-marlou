import React from "react";
import Layout from "../layout";
import ContactMeSection from "./sections/contact-me-section";
import FormSection from "./sections/form-section";

export default function Page() {
    return (
        <Layout>
            <div className="relative isolate bg-black">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <ContactMeSection />
                    <FormSection />
                </div>
            </div>
        </Layout>
    );
}
