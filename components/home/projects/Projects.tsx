import React, { useState } from 'react';
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProjectData {
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: [];
  description: string;
  modalContent: string;
}


 export const Projects = () => {
  
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);

   React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projectsData.json");
        const data = await response.json();
        setProjectsData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
     fetchData();
  }, []);
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