import sectionStyles from "./css/section.module.css";
import styles from "./css/CircularLogoAndText.module.css";

const CircularLogoAndText = ({logoPath, logoAlt, title, subtitle, buttonText, buttonOnClick}) => {
  return (
    <div className={sectionStyles.sectionFlex}>
      <div className={styles.subsection}>
        <div className={styles.text}>
          <div className={styles.title}>
            {title}
          </div>

          {/* <hr/> */}
          <div className={styles.subtitle}>
            {subtitle}
          </div>
          
        </div>

        <div className={styles.imageWrapper}>
          <img src={logoPath} alt={logoAlt}/>
        </div>
      </div>
    </div>
  );
}

export default CircularLogoAndText;
