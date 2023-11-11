import React from "react"
import styles from "../../public/css/styles.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

const contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h2>Contact</h2>
      <div class={styles.hiremeContainer}>
        <p>Address: F Torres street, Davao City, Philippines</p>
        <p>Email: mrdavepmariano@gmail.com</p>
        <p>Phone Number: +63 9563656500</p>
        <p>
          Download my Resume:
          <a href="./Dave-Mariano-Resume.pdf" download class="button">
            Download Resume
          </a>
        </p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/mrdavepmariano/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/rhiaji" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  )
})

export default contact
