import sectionStyles from "./css/section.module.css";
import styles from "./css/DownloadSection.module.css";
import SectionTitle from "./SectionTitle";

const DownloadSection = ({title,bgImage="", bgColor = "black", fgColor = "white", bgColorTitle = "white", fgColorTitle = "black", cards}) => {
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
      <div
        className={styles.options}
        style={{
          color: fgColorTitle,
          backgroundColor: bgColorTitle
        }}
      > 
       
      </div>
      
      <div className={styles.flex}>
        {cards}
      </div>
    </div>
  );
}

export default DownloadSection;
