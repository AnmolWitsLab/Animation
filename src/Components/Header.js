import React from "react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div class="logo">
          <h1 class="animated_infinite_bounce">Wits Innovation Lab</h1>
        </div>
        <div class="menu">
          <a href="/">About Us</a>
          <a href="/">Industry</a>
          <a href="/">Services</a>
          <a href="/">Career</a>
        </div>
      </nav>

      <main>
        <section>
          <h3>We're not just IT.</h3>
          <h1>
            We're a Business Transformation Company.
            <span class="change_content"> </span>
            <span style={{ marginTop: "-10px" }}> </span>
          </h1>
          <p>
            We are more than just a business. We're a community of like-minded
            individuals who share our love for connecting people with the best
            in their area.
          </p>
          <a href="/" class="btnone">
            Let’s Connect
          </a>
          <a href="/" class="btntwo">
            Tell Us About your Project
          </a>
        </section>
      </main>
    </header>
  );
};

export default Header;
