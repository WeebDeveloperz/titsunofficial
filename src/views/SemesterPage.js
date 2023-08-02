import { useState, useEffect } from "react";
import { getSemester } from "../getters";
import SemesterCard from "../components/Cards/SemesterCard";
import CardsSection from "../components/Sections/CardsSection";
import styles from "./css/Semesterpage.module.css";


export default function SemesterPage() {
  const [semester, setSemester] = useState([]);

  useEffect(_ => {
    setSemester(getSemester());
  }, []);

  return (
    <div className={styles.SemesterPage}>
      <CardsSection
        title={"Semester"}
        cards={
          semester.map((i, id) =>
            <SemesterCard
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
