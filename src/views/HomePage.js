import { useState, useEffect } from "react";

import {
  getFrontpageInfo,
  getTest1,
  getTest2,
  getTest3,
} from "./../getters";

import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import Test3 from "./../components/Cards/Test3";
import Test2 from "../components/Cards/Test2";
import Test1 from "../components/Cards/Test1";

export default function HomePage() {
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [fpInfo, setFpInfo] = useState({});
  const [three, setThree] = useState([]);

  useEffect(_ => {
    setOne(getTest1());
    setTwo(getTest2());
    setFpInfo(getFrontpageInfo());
    setThree(getTest3());
  }, []);

  return (
    <>
      <CircularLogoAndText
        title={fpInfo.title}
        subtitle={fpInfo.subtitle}
        logoPath="/images/ps.webp"
        logoAlt="test alter"
        />

      <CardsSection
        title={"Test 1"}
        fgColorTitle="#232627"
        bgColorTitle="ghostwhite"
        bgImage="linear-gradient(135deg, #000000 0%, #959595 100%)"
        cards={
          one.map((i, id) =>
            <Test1
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <CardsSection
        title={"Test 3"}
        fgColorTitle="ghostwhite"
        bgColorTitle="black"
        bgImage="linear-gradient(135deg, #949293 0%, #033369 100%)"
        cards={
          two.map((i, id) =>
            <Test2
              key={`event-${id}`}
              img={i.img}
              alt={`${i.title} Poster`}
              title={i.title}
              subtitle={i.description}
              />
          )
        }
        />

      <CardsSection
        title={"Test 3"}
        cards={
          three.map((i, id) =>
            <Test3
              key={id}
              img={i.img}
              title={i.title}
              subtitle={i.subtitle}
              />
          )
        }
        />
    </>
  );
}
