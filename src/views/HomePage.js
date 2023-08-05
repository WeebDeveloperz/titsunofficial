import { useState, useEffect } from "react";

import {
  getFrontpageInfo,
  getTest1,
} from "./../getters";

import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import Test1 from "../components/Cards/Test1";

export default function HomePage() {
  const [one, setOne] = useState([]);
  const [fpInfo, setFpInfo] = useState({});

  useEffect(_ => {
    setOne(getTest1());
    setFpInfo(getFrontpageInfo());
  }, []);

  return (
    <>
      <CircularLogoAndText
        bgColor={"#967BB6"}
        title={fpInfo.title}
        subtitle={fpInfo.subtitle}
        logoPath="/images/rahul.webp"
        logoAlt="test alter"
        />

      <CardsSection
        title={"Notes"}
        fgColorTitle="ghostwhite"
        bgColorTitle="#232627"
        bgImage="linear-gradient(135deg, #f9feff 0%, #f9f6ee 100%)"
        cards={
          one.map((i, id) =>
            <Test1
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              to={i.to}
              />
          )
        }
        />
    </>
  );
}
