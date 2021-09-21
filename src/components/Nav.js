import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={"Nav"}>
      <Link to={"/"} className={"Nav-a"}>
        Home
      </Link>
      <Link to={"/projects"} className={"Nav-a"}>
        Projects
      </Link>
      <Link to={"/about"} className={"Nav-a"}>
        About
      </Link>
      <Link to={"/contact"} className={"Nav-a"}>
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
