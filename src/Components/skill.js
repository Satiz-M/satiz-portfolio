import React from "react";
import "./skill.css";
import SkillBar from "react-skillbars";
import { motion } from "framer-motion";

const SKILLS = [
  {
    type: "HTML",
    level: 90
  },
  {
    type: "CSS",
    level: 80
  },
  {
    type: "JAVASCRIPT",
    level: 75
  },
  {
    type: "BOOTSTRAP",
    level: 60
  },
  {
    type: "SASS",
    level: 40
  },
  {
    type: "REACT",
    level: 80
  },
  {
    type: "GIT",
    level: 40
  }
];

const colors = {
  bar: {
    hue: 32,
    saturation: 50,
    level: {
      minimum: 30,
      maximum: 70
    }
  },
  title: {
    text: {
      hue: 45,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: 50
    },
    background: {
      hue: 30,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: {
        minimum: 0,
        maximum: 50
      }
    }
  }
};

const Skills = () => {
  return (
    <motion.div className="skills">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        skills
      </motion.h3>
      <div className="skills-container">
        <SkillBar
          skills={SKILLS}
          colors={colors}
          animationDuration={4000}
          animationDelay={1500}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
