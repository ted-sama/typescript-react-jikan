import React from "react";
import useLocalStorage from "use-local-storage";
import Manga from "./components/Manga";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Row from "./components/Row";
import ThemeSwitch from "./components/ThemeSwitch";
import requests from "./requests";
import "./App.scss";

const billboardImg: string =
  "https://www.themeraider.com/wp-content/uploads/2016/10/feat-oct-9-5.jpg";

function App() {
  const [theme, setTheme] = useLocalStorage(
    "chooeicha-theme",
    "theme" ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Featured
        fetchUrl={requests.fetchAnimeFeatured}
        billboardImage={billboardImg}
      />
      <div className="main-container">
        <Row
          title="Top mangas"
          fetchUrl={requests.fetchTopMangaAll}
          appearAfter={false}
        />
        <Row
          title="Top animes"
          fetchUrl={requests.fetchTopAnimeAll}
          appearAfter={false}
        />
        <Row
          title="Trending animes"
          fetchUrl={requests.fetchTopAnimeAiring}
          appearAfter={true}
        />
        <div className="footer">
          {theme === "light" ? (
            <button className="theme-switch" onClick={switchTheme}>
              Switch to dark mode
            </button>
          ) : (
            <button className="theme-switch" onClick={switchTheme}>
              Switch to light mode
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
