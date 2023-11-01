import React, {useState} from "react"
import styles from "../../public/css/styles.module.css"
import pop from "../../public/css/popup.module.css"

const skills = React.forwardRef((props, ref) => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)

  return (
    <section ref={ref}>
      <div className={styles.sectionHeader}>
        <h2>Skills</h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.row}>
          <div className={styles.skillsContent} onClick={() => setShow1(true)}>
            <img src="./images/JAVASCRIPT-LOGO.png" />
            <h5>JavaScript</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show1 ? "block" : "none"}} onClick={() => setShow1(false)}>
            <div className={pop.popupSkill}>
              <p>
                JavaScript is a versatile programming language that adds interactivity and dynamic behavior to websites. With it, you can create
                features like form validation, animations, and more.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow2(true)}>
            <img src="./images/CSS-LOGO.png" />
            <h5>CSS</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show2 ? "block" : "none"}} onClick={() => setShow2(false)}>
            <div className={pop.popupSkill}>
              <p>
                CSS is used to style and format web content. It controls the layout, colors, fonts, and design of web pages, making them visually
                appealing and user-friendly.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow3(true)}>
            <img src="./images/HTML-LOGO.png" />
            <h5>HTML</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show3 ? "block" : "none"}} onClick={() => setShow3(false)}>
            <div className={pop.popupSkill}>
              <p>
                HTML is the backbone of web development. It structures web content and defines elements like headings, paragraphs, links, and images.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow4(true)}>
            <img src="./images/Firebase-LOGO.png" />
            <h5>Firebase</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show4 ? "block" : "none"}} onClick={() => setShow4(false)}>
            <div className={pop.popupSkill}>
              <p>
                Firebase is a comprehensive mobile and web development platform. It offers features like authentication, real-time database, and cloud
                functions to streamline app development.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow5(true)}>
            <img src="./images/MongoDB-LOGO.png" />
            <h5>MongoDB</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show5 ? "block" : "none"}} onClick={() => setShow5(false)}>
            <div className={pop.popupSkill}>
              <p>
                MongoDB is a NoSQL database that provides a flexible and scalable solution for data storage. It's commonly used in web development for
                its ease of use and adaptability.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow6(true)}>
            <img src="./images/Express-LOGO.png" />
            <h5>Express.js</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show6 ? "block" : "none"}} onClick={() => setShow6(false)}>
            <div className={pop.popupSkill}>
              <p>
                Express.js is a web application framework for Node.js. It's commonly used to build scalable and fast web applications on the server
                side using JavaScript.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow7(true)}>
            <img src="./images/REACT-LOGO.png" />
            <h5>React</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show7 ? "block" : "none"}} onClick={() => setShow7(false)}>
            <div className={pop.popupSkill}>
              <p>
                React is a popular JavaScript library for building user interfaces. It allows for the creation of reusable UI components and enhances
                the performance of web applications.
              </p>
            </div>
          </div>
          <div className={styles.skillsContent} onClick={() => setShow8(true)}>
            <img src="./images/NODE-JS-LOGO.png" />
            <h5>Node.js</h5>
          </div>
          <div className={pop.popupContainer} style={{display: show8 ? "block" : "none"}} onClick={() => setShow8(false)}>
            <div className={pop.popupSkill}>
              <p>
                Node.js is a runtime environment for executing JavaScript code on the server side. It's commonly used to build scalable and fast web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default skills
