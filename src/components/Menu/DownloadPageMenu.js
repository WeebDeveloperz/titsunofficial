import { useEffect, useState } from "react";
import { getSubjectsList } from "./../../getters";
import styles from "./css/DownloadPageMenu.module.css";

const DownloadPageMenu = ({ setSubjects }) => {
  const branches = [
    {
      name: "CE",
      query: "CE"
    },
    {
      name: "EC",
      query: "EC"
    }
  ];

  const selectedBranchStyle = {
    borderBottom: "1px solid black"
  }

  const selectedSemesterStyle = {
    borderBottom: "1px solid black"
  }

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(_ =>
    getSubjectsList(selectedBranch, selectedSemester, setSubjects, () => {}),
    [selectedBranch, selectedSemester, setSubjects]
  );

  return (
    <div className={styles.menu}>
      <div className={styles.branchSelector}>
        {branches.map(i =>
          <span
            key={i.query}
            className={styles.branch}
            style={
              JSON.stringify(i) === JSON.stringify(selectedBranch)
                ? selectedBranchStyle : {}
            }
            onClick={_ => setSelectedBranch(i)}
            >
            {i.name}
          </span>
        )}
      </div>

      <div className={styles.semesterSelector}>
        {[...Array(8).keys()].map(i => i + 1).map(i =>
          <span
            key={i}
            className={styles.semester}
            style={
              selectedSemester === i ? selectedSemesterStyle : {}
            }
            onClick={_ => setSelectedSemester(i)}
            >
            {i}
          </span>
        )}
      </div>
    </div>
  );
}

export default DownloadPageMenu;
