import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Menu from "./components/Menu/Menu";

import HomePage from './views/HomePage';
import DevelopersPage from "./views/DevelopersPage";
import DownloadPage from "./views/DownloadPage";
import SuggestionPage from "./views/SuggestionPage";

import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      label: "Home",
      path: "/"
    }, {
      label: "Instagram",
      path: "https://www.instagram.com/",
      lowPriority: true
    }, {
      label: "GitHub",
      path: "https://github.com/",
      lowPriority: true
    }, {
      label: "Developers",
      path: "/developer",
    }, {
      label: "Download",
      path: "/download",
    }, {
      label: "Suggestions",
      path: "/suggestions",
    },
  ];

  return (
    <>
      {showMenu &&
        <Menu
          items={menuItems}
          close={() => setShowMenu(false)}
          />
      }
      <Navbar
        items={menuItems}
        openMenu={() => setShowMenu(true)}
        />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/test" element={<HomePage/>}/>
          <Route exact path="/developer" element={<DevelopersPage/>}/>
          <Route exact path="/download" element={<DownloadPage/>}/>
          <Route exact path="/suggestions" element={<SuggestionPage/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
