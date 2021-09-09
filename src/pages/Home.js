import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import downArrow from "../assests/DownArrow.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Austin O'Neill</h1>
      <h1>Professional</h1>
      <h1>Full Stack Developer</h1>
      <Link to={"/projects"}>
        <button>
          <img src={downArrow} alt={downArrow} />
        </button>
      </Link>
    </>
  );
};

export default Home;
