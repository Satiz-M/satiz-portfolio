import React from "react";
import "./certification.css";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <motion.div className="certification">
      <h2 className="title">Certifications</h2>
      <div className="certification_box">
        <motion.div
          className="web-design cards"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="certificate-name">Responsive Web Design</h3>

          <div className="inner-cards">
            <a
              href="https://freecodecamp.org/certification/satiz_m/responsive-web-design"
              alt="web-design"
              target="blank"
            >
              <img
                className="certification_image"
                src="https://rukminim1.flixcart.com/image/416/416/kf4ajrk0/computer/q/8/5/dell-na-gaming-laptop-original-imafvn3yewuackzs.jpeg?q=70"
                alt="web-design"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="front-end cards"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="certificate-name">Front End Libraries</h3>

          <div className="inner-cards">
            <a
              href="https://freecodecamp.org/certification/satiz_m/front-end-libraries"
              alt="front-end"
              target="blank"
            >
              <img
                className="certification_image"
                src="https://rukminim1.flixcart.com/image/416/416/kf4ajrk0/computer/q/8/5/dell-na-gaming-laptop-original-imafvn3yewuackzs.jpeg?q=70"
                alt="front-end"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certification;
