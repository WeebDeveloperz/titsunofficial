/*
 * data is kinda stored here for now
 * because if you store data on backend
 * this is from where you'll send GET requests
 */
export function getTest1() {
  return [
    {
      img: "/images/zt.png",
      imgAlt: "1",
      goalName: "test 1",
      goalRole: "",
    },
    
  ];
}

export function getTest2() {
  return [
    {
      title: "Test 2",
      img: "/images/blast.png",
      description: "Sample content",
    },
  ];
}

export function getTest3() {
  return [
    {
      img: "/images/rah.jpg",
      title: "",
      subtitle: "sample content"
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

export function getFrontpageInfo() {
  return {
    title: "Heading",
    subtitle:"-----------------------------------samle space-----------------------------------",
    logoPath: "/images/",
  };
}

