import NavTop from "../components/NavTop";
import { Link } from "react-router-dom";
import downArrow from "../assests/ArrowDownFancy.png";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      <NavTop />
      <Heading title={"Austin O'Neill"} desc={"Fullstack Developer"} />
      <Link to={"/projects"}>
        <img src={downArrow} alt={downArrow} />
      </Link>
    </>
  );
};

export default Home;
