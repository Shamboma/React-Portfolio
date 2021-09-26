import { useState } from "react";
import Heading from "../components/Heading";
import downArrow from "../assests/ArrowDownFancy.webp";
import Nav from "../components/Nav";
import resume from "../assests/Resume.webp";
import ArrowDownFancy from "../components/ArrowDownFancy";

const About = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const personal = "Personal About";
  const perDecs =
    "A thing I learned from school was to always get something out, I need to focus my time on my trading terminal and applying for jobs. " +
    "Hopefully I'll have this all done before a recruiter sees this site and it will be looking beautiful, but if not... Hey there";
  const professional = "Professional About";
  const proDesc =
    "Eager Fullstack Developer finishing Computer programming diploma at Algonquin College with 2 years experience " +
    "developing Fullstack applications mainly with MERN stack in teams and independently using an Agile approach.";

  const changeHandler = () => {
    if (showPersonal === false) {
      setShowPersonal(true);
    } else setShowPersonal(false);
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <Nav />
        </div>
      </div>
      <div className={"row fill"}>
        <div className={"col-6"}>
          <img src={resume} alt={resume} className={"Resume"} />
        </div>
        <div className={"col-6 center"}>
          {showPersonal ? (
            <Heading title={personal} desc={perDecs} />
          ) : (
            <Heading title={professional} desc={proDesc} />
          )}
          <div className={"row center"}>
            <img
              onClick={changeHandler}
              src={downArrow}
              alt={downArrow}
              className={"ArrowDownFancy"}
            />
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-12 bottom"}>
          <ArrowDownFancy destination={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
