import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./About.scss";

// const abouts = [
//   {
//     title: "Web development",
//     description: "I am a good web developer",
//     imageurl: images.about01,
//   },
//   {
//     title: "Web design",
//     description: "I am a good web designer",
//     imageurl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good web developer",
//     imageurl: images.about03,
//   },
//   {
//     title: "Web animation",
//     description: "I am a good web animator",
//     imageurl: images.about04,
//   },
// ];

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageurl} alt={about.title} />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
export default About;
