import sectionStyles from "./css/section.module.css";
import styles from "./css/CircularLogoAndText.module.css";

const CircularLogoAndText = ({logoPath, logoAlt, title, subtitle, buttonText, buttonOnClick, bgColor}) => {
  return (
    <div className={sectionStyles.sectionFlex}
      style={{
        backgroundColor: bgColor
      }}
    >
     
      <div className={styles.subsection}>
        <div className={styles.imageWrapper}>
          <img src={logoPath} alt={logoAlt}/>
        </div>

        <div className={styles.text}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>

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
