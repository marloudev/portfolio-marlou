import HeaderSection from "./_sections/header-section";
import CoverSection from "./_sections/cover-section.";
import StackSection from "./_sections/stack-section";
import AboutSection from "./_sections/about-section";
import ExperienceSection from "./_sections/experience-section";
import FooterSection from "./_sections/footer-section";
import SkillsSection from "./_sections/skills-section";
import Layout from "../layout";
import ServicesSection from "./_sections/services-section";

export default function Home() {
    return (
        <Layout>
            <CoverSection />
            <AboutSection />
            <StackSection />
            <SkillsSection />
            <ExperienceSection />
            <ServicesSection />
            <FooterSection />
        </Layout>
    );
}
