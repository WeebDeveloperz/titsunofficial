import styles from "./css/Window.module.css";

const Window = ({child}) => {
    return (
        <div className={styles.windowWrapper}>
            <div className={styles.window}>
                <div className={styles.closeButton}>
                </div>

                {child}
            </div>
        </div>
    );
}

export default Window;