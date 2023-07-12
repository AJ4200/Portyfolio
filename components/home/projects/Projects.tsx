import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import projectsData from "./projectsData.json";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

 export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      <Carousel autoPlay infiniteLoop stopOnHover>
      {projectsData.map((project) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              imgSrc={project.imgSrc}
              code={project.code}
              projectLink={project.projectLink}
              tech={project.tech}
              description={project.description}
              modalContent={<p dangerouslySetInnerHTML={{ __html: project.modalContent }} />}
            />
          );
        })}
            </Carousel>
    </section>
  );
};