import { useState, useEffect } from "react";

import { getDownload } from "./../getters";

import DownloadCard from "./../components/Cards/DownoadCard";
import CardsSection from "./../components/Sections/CardsSection";

import styles from "./css/Downoad.module.css";

export default function Download() {
  const [download, setDownload] = useState([]);

  useEffect(_ => {
    setDownload(getDownload());
  }, []);

  return (
    <div className={styles.downloadPage}>
      <CardsSection
        title={"Download"}
        cards={
          download={}.map((i, id) =>
            <Download
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
