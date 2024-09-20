import CaseStudyProjects from "@/components/CaseStudyProjects";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <CaseStudyProjects />
      <ContactUs />
      <IconCloudDemo />
    </>
  );
}
