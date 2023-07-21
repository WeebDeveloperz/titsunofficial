import SectionTitle from "./SectionTitle";

import sectionStyles from "./css/section.module.css";
import styles from "./css/CardsSection.module.css";

const CardsSection = ({title,bgImage="", bgColor = "black", fgColor = "white", bgColorTitle = "white", fgColorTitle = "black", cards}) => {
  return (
    <div
      className={title ? sectionStyles.sectionWithTitle : sectionStyles.section}
      style={{
        backgroundColor: bgColor,
        color: fgColor,
        backgroundImage: bgImage
      }}
    >
      {title &&
        <SectionTitle
          title={title}
          bgColor={bgColorTitle}
          fgColor={fgColorTitle} 
          />
      }
      <div className={styles.flex}>
        {cards}
      </div>
    </div>
  );
}

export default CardsSection;
