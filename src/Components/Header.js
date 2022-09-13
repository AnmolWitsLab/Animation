import React from "react";
import "./HeaderStyle.css";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.nav>
        <div class="logo">
          <motion.h1
            animate={{ scale: [1.1, 0.8, 1.1] }}
            whileHover={{ scale: [1, 1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            Wits Innovation Lab
          </motion.h1>
        </div>
        <div class="menu">
          <motion.a whileHover={{ scale: 1.1 }} href="/">
            About Us
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/">
            Industry
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/">
            Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            href="/"
          >
            Career
          </motion.a>
        </div>
      </motion.nav>

      <main>
        <section>
          <motion.h3
            initial={{ scale: 0.2, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We're not just IT.
          </motion.h3>
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
          <motion.div className="btns">
            <motion.a
              initial={{ x: -550, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="/"
              class="btnone"
            >
              Let’s Connect
            </motion.a>
            <motion.a
              initial={{ x: 550, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="/"
              class="btntwo"
            >
              Tell Us About your Project
            </motion.a>
          </motion.div>
        </section>
      </main>
    </header>
  );
};

export default Header;
