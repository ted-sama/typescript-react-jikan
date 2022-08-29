import React from "react";
import Manga from "./components/Manga";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Row from "./components/Row";
import requests from "./requests";
import "./App.scss";

const billboardImg: string = "https://images2.alphacoders.com/100/1003787.PNG";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured
        fetchUrl={requests.fetchMangaFeatured}
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
      </div>
    </div>
  );
}

export default App;
