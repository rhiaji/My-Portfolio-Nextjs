import React from "react";

const contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h2>Contact</h2>
      <div class="hireme-container">
        <p>Email: mrdavepmariano@gmail.com</p>
        <p>Phone Number: +63 9563656500</p>
        <p>
          Download my Resume:
          <a href="./Dave-Mariano-Resume.pdf" download class="button">
            Download Resume
          </a>
        </p>
      </div>
    </section>
  );
});

export default contact;
