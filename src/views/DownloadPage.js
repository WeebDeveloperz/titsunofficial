//import DownloadCard from "./../components/Cards/DownloadCard";
import DownloadSection from "../components/Sections/DownloadSection";

import styles from "./css/DownloadPage.module.css";

export default function DownloadPage() {

  return (
    <div className={styles.downloadPage}>
      <DownloadSection
        title={"Download"}
        //cards={
        //  subjects.map((i, id) =>
        //    <DownloadCard
        //      key={id}
        //      img={i.img}
        //      alt={`${i.title} Photo`}
        //      title={i.title}
        //      subtitle={i.subtitle}
        //      />
        //  )
        //}
        />
    </div>
  );
}
