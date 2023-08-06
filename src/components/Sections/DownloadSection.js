import { useState, useCallback, useEffect } from "react";

import styles from "./css/DownloadSection.module.css";
import DownloadPageMenu from "./../Menu/DownloadPageMenu";

import { getFilesList } from "./../../getters";

const DownloadSection = () => {
  const [files, setFiles] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectsUpdate = useCallback(x => {
    setSubjects(x)
  }, [setSubjects]);

  useEffect(_ => {
    if (selectedSubject !== null) {
      getFilesList(selectedSubject.id, setFiles, () => {});
    }
  }, [selectedSubject, setFiles]);

  return (
    <div>
      <DownloadPageMenu setSubjects={handleSubjectsUpdate}/>

      <div className={styles.flex}>
        {
          subjects.map(i =>
            <div key={i.id} onClick={_ => setSelectedSubject(i)}>
              {i.name}
            </div>
          )
        }
        {
          files.map(i =>
            <div key={i.id}>
              {i.name}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default DownloadSection;
