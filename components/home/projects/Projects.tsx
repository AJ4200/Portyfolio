import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Projects = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projectsData.json"); // Update the URL here
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
     fetchData();
  }, []);
   return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      {isLoading ? (
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <Carousel autoPlay infiniteLoop stopOnHover>
          {data.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              imgSrc={project.imgSrc}
              code={project.code}
              projectLink={project.projectLink}
              tech={project.tech}
              description={project.description}
              modalContent={
                <p dangerouslySetInnerHTML={{ __html: project.modalContent }} />
              }
            />
          ))}
        </Carousel>
      )}
    </section>
  );
};
