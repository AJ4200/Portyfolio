import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Portyfolio",
    imgSrc: "project-imgs/Portyfolio.png",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Nodejs(Next)", "Ruby On Rails", "", ""],
    description:
      "I designed and built this website from so that one can present their resume visually. It is a borthday gift to myself",
    modalContent: (
      <>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
        Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "CommonFunLib.io",
    imgSrc: "project-imgs/CommonFunLib.png",
    code: "https://www.github.com",
    projectLink: "https://commonfunlib.onrender.com",
    tech: ["Nodejs(React)", "Ruby On Rails", "Maven", "Java"],
    description:
      "A companion for My Java library. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
        Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "CodeShifter",
    imgSrc: "project-imgs/CodeShifter.png",
    code: "https://www.github.com",
    projectLink: "https://code-shifter.vercel.app",
    tech: ["Nodejs(Next)", "Python", "NTM(Language Models)"],
    description:
      "Converts code form one lang to another",
    modalContent: (
      <>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt. their community.
        </p>
        <p>
        Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  }
];
