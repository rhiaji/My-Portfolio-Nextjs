"use client"
import React, {useRef, useEffect} from "react"
import About from "../../public/components/about"
import Skills from "../../public/components/skills"
import Projects from "../../public/components/projects"
import Contact from "../../public/components/contact"
import styles from "../../public/css/styles.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  function scrollStep(timestamp: number, startTime: number | null, targetElement: Element) {
    if (startTime === null) {
      startTime = timestamp
    }

    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / 400, 1)

    window.scrollTo(0, window.scrollY + targetElement.getBoundingClientRect().top * progress)

    if (progress < 1) {
      window.requestAnimationFrame((t) => scrollStep(t, startTime, targetElement))
    }
  }

  function scrollTo(targetRef: React.RefObject<HTMLElement>) {
    const targetElement = targetRef.current

    if (targetElement) {
      let startTime: number | null = null

      window.requestAnimationFrame((timestamp) => scrollStep(timestamp, startTime, targetElement))
    }
  }

  return (
    <body>
      <div className={styles.header}>
        <div className={styles.headerButton}>
          <h3>Dave Mariano</h3>
        </div>
        <div className={styles.headerButton}>
          <button onClick={() => scrollTo(aboutRef)}>
            <h3>About</h3>
          </button>
          <button onClick={() => scrollTo(skillsRef)}>
            <h3>Skills</h3>
          </button>
          <button onClick={() => scrollTo(projectRef)}>
            <h3>Projects</h3>
          </button>
          <button onClick={() => scrollTo(contactRef)}>
            <h3>Hire Me</h3>
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <About ref={aboutRef} />
        {/* Assign the ref to the Skills component */}
        <Skills ref={skillsRef} />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
      </div>

      <div className={styles.footer}>
        <p>Contact me @ mrdavepmariano@gmail.com</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/mrdavepmariano/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/rhiaji" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </body>
  )
}
