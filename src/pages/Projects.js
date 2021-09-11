import Heading from "../components/Heading";
import { useState } from "react";
import Project from "../components/Project";
import NavSide from "../components/NavSide";

const Projects = () => {
  const title = "Title";
  const desc = "Desc";
  const [projects, setProjects] = useState([
    { title: "Portfolio", src: "portfolio.png", desc: "DESC", git: "Link*" },
    { title: "Trading Terminal", src: "tt.png", desc: "DESC", git: "Link*" },
  ]);

  return (
    <>
      <Heading title={title} desc={desc} />
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          src={project.src}
          desc={project.desc}
          git={project.git}
        />
      ))}
      <NavSide up={"/"} down={"/about"} />
    </>
  );
};

export default Projects;
