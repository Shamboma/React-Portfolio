import { useState } from "react";
import Heading from "../components/Heading";
import downArrow from "../assests/ArrowDownFancy.webp";
import Nav from "../components/Nav";
import resume from "../assests/CoverLetter.webp";
import ArrowDownFancy from "../components/ArrowDownFancy";

const About = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const personal = "Personal About";
  const perDecs =
    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah";
  const professional = "Professional About";
  const proDesc =
    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah";

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
        <div className={"col-6 center"}>
          <img src={resume} alt={resume} className={"Resume"} />
        </div>
        <div className={"col-6 center"}>
          {showPersonal ? (
            <Heading title={personal} desc={perDecs} />
          ) : (
            <Heading title={professional} desc={proDesc} />
          )}
          <div className={"row center"}>
            <img onClick={changeHandler} src={downArrow} alt={downArrow} />
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
