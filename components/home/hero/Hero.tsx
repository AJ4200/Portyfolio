import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hello, I&apos;m Abel<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Software Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          I&apos;m a software engineer in training with experience in building and scaling software for innovative companies. Additionally, I possess skills in creative fields such as cinematography, music production, game development, and content creation. Currently pursuing a BSc degree at the University of Johannesburg, I take on small projects to further hone my skills. As a hobbyist, I develop mods for games, make music, record commentary videos for YouTube, and compete in online gaming tournaments. Let&apos;s collaborate and create dynamic solutions together!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
