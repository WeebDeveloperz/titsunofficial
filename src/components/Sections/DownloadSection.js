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
      {/* {title &&
        <SectionTitle
          title={title}
          bgColor={bgColorTitle}
          fgColor={fgColorTitle} 
        />
      } */}
      <div
        className={styles.options}
        style={{
          color: fgColorTitle,
          backgroundColor: bgColorTitle
        }}
      > 
       <div className={styles.cse} >
          CSE
       </div>
       <div className={styles.cse}>
          ECE
       </div>
      </div>
      
      <div
        className={styles.semesters}
        style={{
          color: fgColorTitle,
          backgroundColor: bgColorTitle
        }}
      > 
       <div className={styles.one} >
          1
       </div>
       <div className={styles.one}>
          2
       </div>
       <div className={styles.one}>
          3
       </div>
       <div className={styles.one}>
          4
       </div>
       <div className={styles.one}>
          5
       </div>
       <div className={styles.one}>
          6
       </div>
       <div className={styles.one}>
          7
       </div>
       <div className={styles.one}>
          8
       </div>
      </div>

      <div className={styles.flex}>
        {cards}
      </div>
    </div>
  );
}

export default DownloadSection;
