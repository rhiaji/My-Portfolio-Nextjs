import React from "react";

const skills = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="section-header">
        <h2>Skills</h2>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="skills-content">
            <img src="./images/JAVASCRIPT-LOGO.png" />
            <h4>JavaScript:</h4>
            <p>
              JavaScript is a versatile programming language that adds
              interactivity and dynamic behavior to websites. With it, you can
              create features like form validation, animations, and more.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/CSS-LOGO.png" />
            <h4>CSS:</h4>
            <p>
              CSS is used to style and format web content. It controls the
              layout, colors, fonts, and design of web pages, making them
              visually appealing and user-friendly.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/HTML-LOGO.png" />
            <h4>HTML:</h4>
            <p>
              HTML is the backbone of web development. It structures web content
              and defines elements like headings, paragraphs, links, and images.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/Firebase-LOGO.png" />
            <h4>Firebase:</h4>
            <p>
              Firebase is a comprehensive mobile and web development platform.
              It offers features like authentication, real-time database, and
              cloud functions to streamline app development.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/MongoDB-LOGO.png" />
            <h4>MongoDB:</h4>
            <p>
              MongoDB is a NoSQL database that provides a flexible and scalable
              solution for data storage. It's commonly used in web development
              for its ease of use and adaptability.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/Express-LOGO.png" />
            <h4>Express.js:</h4>
            <p>
              Express.js is a web application framework for Node.js. It's
              commonly used to build scalable and fast web applications on the
              server side using JavaScript.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/REACT-LOGO.png" />
            <h4>React:</h4>
            <p>
              React is a popular JavaScript library for building user
              interfaces. It allows for the creation of reusable UI components
              and enhances the performance of web applications.
            </p>
          </div>
          <div className="skills-content">
            <img src="./images/NODE-JS-LOGO.png" />
            <h4>Node.js:</h4>
            <p>
              Node.js is a runtime environment for executing JavaScript code on
              the server side. It's commonly used to build scalable and fast web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default skills;
