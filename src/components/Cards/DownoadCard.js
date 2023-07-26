
import styles from "./css/DownloadCard.module.css";

const DownloadCard = ({img, alt, title, subtitle}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={alt}/>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default DownloadCard;
