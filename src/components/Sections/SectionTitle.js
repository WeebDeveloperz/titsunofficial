import styles from "./css/section.module.css";

const SectionTitle = ({title, bgColor, fgColor}) => {
  return (
    
    <div
      className={styles.sectionTitle}
      style={{
        color: fgColor,
        backgroundColor: bgColor
      }}
    >
      {title}
    </div>
  );
}

export default SectionTitle;
