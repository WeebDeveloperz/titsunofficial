
import styles from "./css/DownloadCard.module.css";

const DownloadCard = ({img, alt, title, subtitle, onClick}) => {
  const imgStyle = {
    backgroundImage: `url(${img})`,
  }

  return (
    <div className={styles.card} style={imgStyle} onClick={onClick}>
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
