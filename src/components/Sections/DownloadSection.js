import { useState, useCallback, useEffect } from "react";

import styles from "./css/DownloadSection.module.css";
import DownloadPageMenu from "./../Menu/DownloadPageMenu";
import DownloadCard from "./../Cards/DownloadCard";

import Window from "./../Window/Window";

import { getFilesList } from "./../../getters";

const DownloadSection = () => {
  const [files, setFiles] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showWindow, setShowWindow] = useState(false);

  const handleSubjectsUpdate = useCallback(x => {
    setSubjects(x)
  }, [setSubjects]);

  console.log(subjects)

  useEffect(_ => {
    if (selectedSubject !== null) {
      getFilesList(selectedSubject.id, setFiles, () => {});
    }
  }, [selectedSubject, setFiles]);

  const handleWindowClose = _ => {
    setShowWindow(false);
  }

  const handleSubjectSelect = x => {
    setSelectedSubject(x);
    setShowWindow(true);
  }

  return (
    <div className={styles.section}>
      <DownloadPageMenu setSubjects={handleSubjectsUpdate}/>

      <div className={styles.flex}>
        {
          subjects.map(i =>
            <DownloadCard
              onClick={_ => handleSubjectSelect(i)}
              img={i.path}
              key={i.id}
              title={i.name}
              subtitle={i.code}
            />
          )
        }

        {showWindow &&
          <Window close={handleWindowClose}>
            <div className={styles.filesPopup}>
              <div className={styles.filesGrid}>
                {files.map(i =>
                  <a key={i.id} className={styles.file} href={`https://apitesting.mikunonaka.net/pub/notes/${i.path}`} download>
                    {i.name}
                  </a>
                )}
              </div>
            </div>
          </Window>
        }
      </div>
    </div>
  );
}

export default DownloadSection;
