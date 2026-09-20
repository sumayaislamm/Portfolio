import ContactCTA from "../components/home/ContactCTA";
import Experience from "../components/home/Experience";
import FeaturedProject from "../components/home/FeaturedProject";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import TechStack from "../components/home/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Projects />
      <TechStack />
      <Experience />
      <Services />
      <ContactCTA />
    </>
  );
}
