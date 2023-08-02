import styles from "./css/Test1.module.css";
import { Link } from "react-router-dom";

const Test1 = ({img, alt, title, subtitle, to}) => {
  return (
    <Link to={to}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={img} alt={alt}/>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </Link>
  );
}

export default Test1;
