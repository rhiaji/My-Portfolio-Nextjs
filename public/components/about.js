import React from "react"
import styles from "../../public/css/styles.module.css"

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className={styles.sectionHead}>
        <h2>About</h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.aboutMe}>
          <p>
            Hello, I'm Dave Mariano, a dedicated and self-taught web developer with a strong commitment to continuous learning and web application
            development. Despite being a registered mechanical engineer, I am deeply passionate about honing my programming skills and contributing to
            the world of web development.
          </p>
          <p>
            My expertise encompasses a range of essential technologies, including JavaScript, Html, Css, Node.js, Express, React, Firebase, and
            MongoDB. I have a keen interest in blockchain technology, particularly with a focus on Hive blockchain. Additionally, I am eager to
            explore various aspects of web development to further refine my skills
          </p>
          <p>
            My portfolio reflects my commitment to creating innovative web solutions. Notable projects include the development of an online
            book-making platform, designed to foster collaborative storytelling, as well as a real-time multiplayer tic-tac-toe game seamlessly
            integrated with Firebase.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src="/images/MYPIC.png" />
          <p>Registered Mechanical Engineer</p>
        </div>
      </div>
    </section>
  )
})

export default About
