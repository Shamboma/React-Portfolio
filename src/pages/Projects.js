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
      desc: "Learning I suck at CSS Learning I suck at CSS Learning I suck at CSS Learning I suck at CSS Learning I suck at CSS",
      git: "Link*",
      demo: "Link*",
    },
    {
      title: "Trading Terminal",
      src: p2,
      desc: "DESC",
      git: "Link*",
      demo: "Link*",
    },
    {
      title: "Coming Soon...",
      src: "tt.png",
      desc: "DESC",
      git: "Link*",
      demo: "Link*",
    },
    {
      title: "Coming Soon...",
      src: "tt.png",
      desc: "DESC",
      git: "Link*",
      demo: "Link*",
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
