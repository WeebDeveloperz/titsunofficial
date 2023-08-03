import sectionStyles from "./css/section.module.css";
import styles from "./css/CircularLogoAndText.module.css";

const CircularLogoAndText = ({logoPath, logoAlt, title, subtitle, buttonText, buttonOnClick, bgColor}) => {
  return (
    <div className={sectionStyles.sectionFlex}
      style={{
        backgroundColor: bgColor
      }}
    >
      <div className={styles.imageWrapper}>
          <img src={logoPath} alt={logoAlt}/>
      </div>

      <div className={styles.subsection}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            {title}
          </h1>

          <hr/>
          <div className={styles.subtitle}>
            {subtitle}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CircularLogoAndText;
