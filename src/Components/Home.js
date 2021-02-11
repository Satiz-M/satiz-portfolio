import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div className="home">
      <img
        className="body-image"
        src="https://cloud.fullstackacademy.com/code-and-headphones-1.jpg?mtime=20200730134602"
        alt=""
      />
      <motion.div
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <motion.span
          className="inner-navbar"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          whileHover={{
            boxShadow: "0px 0px 0px 3px rgba(255,255,255,1)",
            scale: 1
          }}
          transition={{ delay: 0, duration: 0.4 }}
        >
          Home
        </motion.span>
        <Link to="/about">
          <motion.span
            className="inner-navbar"
            whileHover={{
              boxShadow: "0px 0px 0px 3px rgba(255,255,255,1)"
            }}
            transition={{ delay: 0, duration: 0.4 }}
          >
            About
          </motion.span>
        </Link>
        <motion.span
          className="inner-navbar"
          whileHover={{
            boxShadow: "0px 0px 0px 3px rgba(255,255,255,1)"
          }}
          transition={{ delay: 0, duration: 0.4 }}
        >
          Skills
        </motion.span>
        <Link to="/certification">
          <motion.span
            className="inner-navbar"
            whileHover={{
              boxShadow: "0px 0px 0px 3px rgba(255,255,255,1)"
            }}
            transition={{ delay: 0, duration: 0.4 }}
          >
            Cerfifications
          </motion.span>
        </Link>
        <motion.span
          className="inner-navbar"
          whileHover={{
            boxShadow: "0px 0px 0px 3px rgba(255,255,255,1)"
          }}
          transition={{ delay: 0, duration: 0.4 }}
        >
          Projects
        </motion.span>
      </motion.div>

      <motion.div
        className="body_text"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 1.5, type: "spring" }}
      >
        <h4 className="body-name">Hello, I'm Sathishkumar</h4>
        <h5 className="body-title">React Developer</h5>
      </motion.div>
    </motion.div>
  );
};

export default Home;
