import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
      <Reveal width="100%">
      <div className={styles.projectTitle}>
        <h4>{title}</h4>
          <Link href={code} target="_blank" rel="nofollow">
          <AiFillGithub size="2.8rem" />
        </Link>

        <Link href={projectLink} target="_blank" rel="nofollow">
          <AiOutlineExport size="2.8rem" />
        </Link>            
        <div className={styles.projectTitleLine} />          
      </div>
    </Reveal>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "63%" : "60%"
  
            }}
          />
        </div>
        <div className={styles.projectCopy}>

          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
