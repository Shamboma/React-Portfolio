import { Link } from "react-router-dom";

const NavSide = (props) => {
  return (
    <nav>
      <Link to={props.up}>
        <img src={"ArrowUp.png"} alt={"ArrowUp.png"} />
      </Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={props.down}>
        <img src={"ArrowDown.png"} alt={"ArrowDown.png"} />
      </Link>
    </nav>
  );
};

export default NavSide;
