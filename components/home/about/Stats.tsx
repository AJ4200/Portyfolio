import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use for work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Azure</span>
            <span className="chip">Heroku</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Ruby on Rails</span>
            <span className="chip">Java</span>
            <span className="chip">Spring</span>
            <span className="chip">Figma</span>
            <span className="chip">Maven</span>
            <span className="chip">Render</span>
            <span className="chip">Vercel</span>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
