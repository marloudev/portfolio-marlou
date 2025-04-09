import React from "react";
import Layout from "../layout";
import AboutMeSection from "./sections/about-me-section";
import SkillsSection from "./sections/skills-section";
import SchoolSection from "./sections/school-section";

export default function Page() {
    return (
        <Layout>
            <AboutMeSection />
            <SkillsSection />
            <SchoolSection />
        </Layout>
    );
}
