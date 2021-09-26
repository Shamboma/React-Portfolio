import Heading from "../components/Heading";
import { useState } from "react";
import Project from "../components/Project";
import Nav from "../components/Nav";
import p1 from "../assests/p1.webp";
import p2 from "../assests/p2.webp";
import ArrowDownFancy from "../components/ArrowDownFancy";

const Projects = () => {
  const title = "Projects";
  const [projects, setProjects] = useState([
    {
      title: "Portfolio",
      src: p1,
      desc:
        "A over engineered portfolio! React is not needed for such a simple website, " +
        "but any practise I can get with framework I will take. I am also trying to learn CSS without any framework so I can actually get a deep understanding of how CSS works. " +
        "I'm having troubles wrapping my head around it, but I have a feeling it will be one of those things that will just click.",
      git: "https://github.com/Shamboma/React-Portfolio",
      demo: "https://austinoneill.ca",
    },
    {
      title: "Trading Terminal",
      src: p2,
      desc:
        "A trading terminal that consumes APIs from different exchanges to trade efficiently and store user’s preferences. " +
        "This is my first react project and is and will be may favourite personal project as there is so much things I can add and learn.",
      git: "https://github.com/Shamboma/React-TradingTerminal",
      demo: "https://tradingterminal.netlify.app",
    },
    {
      title: "Coming Soon...",
      src: "ComingSoon",
      desc: "The possibilities",
      git: "",
      demo: "",
    },
    {
      title: "Coming Soon...",
      src: "ComingSoon",
      desc: "The possibilities",
      git: "",
      demo: "",
    },
  ]);

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <Nav />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-12"}>
          <Heading title={title} />
        </div>
      </div>
      <div className={"row fill"}>
        {projects.map((project) => (
          <div className={"col-3 center"}>
            <Project
              key={project.title}
              title={project.title}
              src={project.src}
              desc={project.desc}
              git={project.git}
              demo={project.demo}
            />
          </div>
        ))}
      </div>
      <div className={"row"}>
        <div className={"col-12 bottom"}>
          <ArrowDownFancy destination={"/about"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
