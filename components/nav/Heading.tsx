import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { useState } from "react";


  export const Heading = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleMakeYourOwnClick = () => {
      setIsPopupOpen(true);
    };

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.buttonholder}>
              <OutlineButton onClick={() => window.open("/fake_resume.pdf")}>
        My resume
      </OutlineButton>
      <button className={styles.outlineButton2}>
  Make Your Own
</button>

      </div>

    </header>
  );
};
