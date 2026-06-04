// Style
import './App.css'

// Components
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import TechArsenal from "./Components/TechArsenal";
import Contact from './Components/Contact.jsx';
import { Outlet, } from 'react-router';
import { useEffect, useState, useRef } from 'react';

const navLinks = [
  { name: "About Me", id: "aboutMe" },
  { name: "Tech Stack", id: "techStack" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function App() {

  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [headerLinks,setHeaderLinks] = useState(navLinks)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    // const sections = navLinks.map((link) => document.getElementById(link.id))
    const sections = [aboutRef, techRef, projectsRef, contactRef]

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: "-45% 0px -55% 0px" })

    sections.forEach(section => {
      if (section.current) observer.observe(section.current)
    })

    return () => {
      sections.forEach((section) => {
        if (section.current) observer.unobserve(section.current)
      })
    }

  }, [])

  return (
    <section className="appWrapper">

      <section className="appWrapper__col1">
        <Header activeSection={activeSection} headerLinks={headerLinks} />
      </section>

      <section className="appWrapper__col2">
        <Outlet context={{ aboutRef, techRef, projectsRef, contactRef, setHeaderLinks }} />
      </section>

      {/* <section className="appWrapper__col2"> */}
      {/*   <AboutMe /> */}
      {/*   <TechArsenal /> */}
      {/*   <Projects /> */}
      {/*   <Contact /> */}
      {/*   <Footer /> */}
      {/* </section> */}

      <section className="appWrapper__col2">
        <Footer />
      </section>

    </section>
  );
}
