import Head from "next/head";

export default function MyPortfolio() {
  return (
    <>
      <Head>
        <title>Dave's Portfolio</title>
        <link rel="stylesheet" href="./css/styles.css" />
        <link rel="stylesheet" href="./css/popup.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>

      <body>
        <div className="header">
          <div className="header-button">
            <h3>Dave Mariano</h3>
          </div>
          <div className="header-button">
            <button id="aboutButton">
              <h3>About</h3>
            </button>
            <button id="skillsButton">
              <h3>Skills</h3>
            </button>
            <button id="projectsButton">
              <h3>Projects</h3>
            </button>
            <button id="hiremeButton">
              <h3>Hire Me</h3>
            </button>
          </div>
        </div>
        <div className="container">{/* Rest of your content */}</div>

        <div className="footer">
          <p>Contact me @ mrdavepmariano@gmail.com</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mrdavepmariano/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/rhiaji" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <script src="/script.js"></script>
      </body>
    </>
  );
}
