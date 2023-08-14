import styles from "./css/Window.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Window = ({children, close}) => {
  return (
    <div className={styles.windowWrapper}>
      <div className={styles.window}>
        <div
          className={styles.closeButton}
          onClick={close}
          >
            <FontAwesomeIcon icon={faXmark} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Window;
