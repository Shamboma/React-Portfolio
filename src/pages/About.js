import NavSide from "../components/NavSide";
import { useState } from "react";
import Heading from "../components/Heading";
import downArrow from "../assests/ArrowDownFancy.png";

const About = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const changeHandler = () => {
    if (showPersonal === false) {
      setShowPersonal(true);
    } else setShowPersonal(false);
  };
  return (
    <>
      <img src={"Resume.png"} alt={"Resume.png"} />
      {showPersonal ? (
        <Heading title={"Personal About"} desc={"DESC"} />
      ) : (
        <Heading title={"Professional About"} desc={"DESC"} />
      )}
      <img onClick={changeHandler} src={downArrow} alt={downArrow} />
      <NavSide up={"/projects"} down={"/contact"} />
    </>
  );
};

export default About;
