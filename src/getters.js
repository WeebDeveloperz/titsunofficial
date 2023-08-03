/*
 * data is kinda stored here for now
 * because if you store data on backend
 * this is from where you'll send GET requests
 */
export function getTest1() {
  return [
    {
      img: "/images/com.jpg",
      imgAlt: "1",
      goalName: "CSE",
      goalRole: "",
      to: "/semester"
    },
    {
      img: "/images/ece.webp",
      imgAlt: "1",
      goalName: "EC, TT, TC, FE",
      goalRole: "",
      to: "/"
    },
    
  ];
}

export function getDevelopers() {
  return [
    {
      img: "/images/rahul.webp",
      imgAlt: "Rahul Goyal(front-end developer)",
      title: "Rahul Goyal",
      subtitle: "Developer",
    },
    {
      img: "/images/vidhukant.webp",
      imgAlt: "Vidhu Kant Sharma(back-end developer)",
      title: "Vidhu Kant sharma",
      subtitle: "Developer",
    }
  ];
}

export function getDownload() {
  return [
    {
      img: "/images/rahul.webp",
      imgAlt: "Rahul Goyal(front-end developer)",
      title: "Rahul Goyal",
      subtitle: "Developer",
    },
    {
      img: "/images/vidhukant.webp",
      imgAlt: "Vidhu Kant Sharma(back-end developer)",
      title: "Vidhu Kant sharma",
      subtitle: "Developer",
    },
    {
      img: "/images/vidhukant.webp",
      imgAlt: "Vidhu Kant Sharma(back-end developer)",
      title: "test 2",
      subtitle: "murkh balak",
    }
  ];
}
export function getSemester() {
  return [
    {
      img: "/images/rahul.webp",
      imgAlt: "sem1",
      title: "Sem 1",
      subtitle: "Downloas",
    },
    {
      img: "/images/vidhukant.webp",
      imgAlt: "sem2",
      title: "Sem 2",
      subtitle: "Download",
    },
    {
      img: "/images/rahul.webp",
      imgAlt: "sem1",
      title: "Sem 3",
      subtitle: "Downloas",
    },
  ];
}

export function getFrontpageInfo() {
  return {
    title: "Hello",
    subtitle:"Today's Comment",
    logoPath: "/images/",
  };
}

