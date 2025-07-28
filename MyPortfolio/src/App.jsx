
import { useState, useEffect } from "react"
// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import Profile from "../components/Profile"
// import About from "../components/About"
// import Education from "../components/Education"
// import Projects from "../components/Projects"
// import Certifications from "../components/Certifications"
// import Skills from "../components/Skills"
// import Contact from "../components/Contact"
// import Footer from "../components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "profile", "about", "education", "projects", "certifications", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const components = [
    { Component: Hero, id: "home" },
    { Component: Profile, id: "profile" },
    { Component: About, id: "about" },
    { Component: Education, id: "education" },
    { Component: Projects, id: "projects" },
    { Component: Certifications, id: "certifications" },
    { Component: Skills, id: "skills" },
    { Component: Contact, id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} />

      {components.map(({ Component, id }, index) => (
        <section key={id} id={id} className="relative">
          <Component />
        </section>
      ))}

      <Footer />
    </div>
  )
}
