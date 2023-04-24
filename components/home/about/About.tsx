import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            As a dedicated software engineer in training, I have gained valuable experience in building and scaling software for a range of innovative companies over the past 5 years. Alongside my passion for software engineering, I also possess a diverse range of skills in other creative fields, including cinematography, music production, game development, and content creation. With a strong background in web development and photography, I am currently pursuing my BSc degree at the esteemed University of Johannesburg while taking on small projects to further hone my skills, such as website building and game designing.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            As a committed hobbyist, I am always exploring new avenues of creative expression, such as developing mods for some of my favorite games, making music, recording commentary videos for YouTube, and competing in online gaming tournaments. With a multifaceted skillset and a passion for innovation, I am excited to collaborate with fellow professionals and bring dynamic solutions to complex problems. Let&apos;s connect and see what we can create together!
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for a job where I can merge my
              love for code with my love learning new things. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
