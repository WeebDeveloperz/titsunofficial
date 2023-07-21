import { useState, useEffect } from "react";

import { getDevelopers } from "./../getters";

import DeveloperCard from "./../components/Cards/DeveloperCard";
import CardsSection from "./../components/Sections/CardsSection";

import styles from "./css/DevelopersPage.module.css";

export default function Developer() {
  const [developers, setDevelopers] = useState([]);

  useEffect(_ => {
    setDevelopers(getDevelopers());
  }, []);

  return (
    <div className={styles.developersPage}>
      <CardsSection
        title={"Developers"}
        cards={
          developers.map((i, id) =>
            <DeveloperCard
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
