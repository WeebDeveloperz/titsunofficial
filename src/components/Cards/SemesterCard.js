
import styles from "./css/SemesterCard.module.css";

export default function SemesterCard({img, alt, title, subtitle}) {
  return (
    <div className={styles.card}>
      {/* <div className={styles.img}>
        <img src={img} alt={alt}/>
      </div> */}
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}
