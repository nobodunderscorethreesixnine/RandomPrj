import { useOutletContext } from "react-router";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Projects from "../Projects";
import TechArsenal from "../TechArsenal";

export default function Homepage() {
  const { aboutRef, techRef, projectsRef, contactRef } = useOutletContext()

  return (
    <>
      <AboutMe sectionRef={aboutRef} />
      <TechArsenal sectionRef={techRef} />
      <Projects sectionRef={projectsRef} />
      <Contact sectionRef={contactRef} />
    </>
  )
}
