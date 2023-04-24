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
    tech: ["Nodejs(Next)", "Ruby On Rails", "PostgreSQL", "Docker"],
    description:
      "I designed and built this website from so that one can present their resume visually. It was a birthday gift to myself",
    modalContent: (
      <>
        <p>
        Portyfolio is a website that helps job seekers create an online portfolio to showcase their skills, experience, and achievements in a visually appealing way. The platform offers customizable templates and designs, allowing users to create a unique and professional-looking portfolio that reflects their personality and style. Users can add their work experience, education, skills, projects, and multimedia content to bring their portfolio to life. The platform&apos;s user-friendly interface makes it easy to edit and update the portfolio, ensuring it stays current and relevant as the user progresses in their career.
        </p>
        <p>
        Portyfolio is suitable for both recent graduates looking for their first job and experienced professionals seeking to switch careers. With the platform&apos;s visually-driven format and customizable templates, users can stand out in a crowded job market and create a compelling online brand. By signing up for Portyfolio, job seekers can take the first step towards landing their dream job by showcasing their talents and experience in a unique and creative way.
        </p>

      </>
    ),
  },
  {
    title: "CommonFunLib.io",
    imgSrc: "project-imgs/CommonFunLib.png",
    code: "https://github.com/AJ4200/commonfunlib.io",
    projectLink: "https://commonfunlib.onrender.com",
    tech: ["Nodejs(React)", "Ruby On Rails", "Maven", "Java"],
    description:
      "A companion for My Java library. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
        CommonFunLib is a Java library that offers a collection of commonly used functions that can be utilized for various purposes such as hashing, computing, and generating functions. This library serves as a helpful companion for developers who are looking for a reliable and efficient tool to make their coding process more efficient. It was designed and built by a single developer who has put a lot of effort into ensuring that the library is robust and capable of meeting the needs of developers across different industries.
        </p>
        <p>
        The library is a result of the developer&apos;s passion and dedication towards creating a valuable resource for the Java community. It is a testament to their technical expertise and commitment to delivering high-quality solutions. With CommonFunLib, developers can enjoy a seamless and efficient coding experience, allowing them to focus on other important aspects of their projects. Overall, this library is a must-have for developers who are looking for an all-in-one solution that simplifies the development process and enhances productivity.
        </p>
      </>
    ),
  },
  {
    title: "CodeShifter",
    imgSrc: "project-imgs/CodeShifter.png",
    code: "https://github.com/AJ4200/CodeShifter",
    projectLink: "https://code-shifter.vercel.app",
    tech: ["Nodejs(Next)", "Python", "NTM(Language Models)"],
    description:
      "Converts code form one progamming language to another instantly",
    modalContent: (
      <>
        <p>
        CodeShifter is a web-based platform that simplifies the process of converting code from one programming language to another. This platform is designed to help programmers easily transition from one programming language to another, without having to learn an entirely new language from scratch. With a simple and intuitive user interface, users can easily enter the code they want to convert and select the desired output language, and the platform will generate the corresponding code in the new language.
        </p>
        <p>
        CodeShifter supports a wide range of programming languages, including popular languages such as Java, Python, C#, Typescript, Javascript and Ruby. The platform also provides advanced features such as syntax highlighting, error detection, and code optimization. With its powerful and easy-to-use tools, CodeShifter is an invaluable resource for developers who need to convert code from one language to another quickly and efficiently, without sacrificing quality or functionality.
        </p>

      </>
    ),
  }
];
