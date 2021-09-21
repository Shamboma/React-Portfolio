import Nav from "../components/Nav";
import Heading from "../components/Heading";
import ArrowDownFancy from "../components/ArrowDownFancy";

const Home = () => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <Nav />
        </div>
      </div>
      <div className={"row fill"}>
        <div className={"col-12 center"}>
          <Heading title={"Austin O'Neill"} desc={"Fullstack Developer"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-12 bottom"}>
          <ArrowDownFancy destination={"/projects"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
