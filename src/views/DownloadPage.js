import { useState, useEffect } from "react";

import { getDownload } from "../getters";

import DownloadCard from "./../components/Cards/DownloadCard";
import CardsSection from "../components/Sections/CardsSection";

import styles from "./css/DownloadPage.module.css";

export default function DownloadPage() {
  const [download, setDownload] = useState([]);

  useEffect(_ => {
    setDownload(getDownload());
  }, []);

  return (
    <div className={styles.downloadPage}>
      <CardsSection
        title={"Download"}
        cards={
          download.map((i, id) =>
            <DownloadCard
              key={id}
              img={i.img}
              alt={`${i.title} Photo`}
              title={i.title}
              subtitle={i.subtitle}
              />
          )
        }
        />
    </div>
  );
}
