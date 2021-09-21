import downArrow from "../assests/ArrowDownFancy.webp";
import { Link } from "react-router-dom";

const ArrowDownFancy = (props) => {
  return (
    <nav className={"ArrowDownFancy"}>
      <Link className={"ArrowDownFancy-a"} to={props.destination}>
        <img src={downArrow} alt={downArrow} />
      </Link>
    </nav>
  );
};

export default ArrowDownFancy;
