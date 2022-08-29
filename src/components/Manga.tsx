import axios from "axios";
import { useEffect, useState } from "react";
import { MangaType } from "../manga";
import loading from "../assets/manga-dance.gif";
import Synopsis from "./Synopsis";

const gamemodeDifficulty: string = "TOP 100";

const Manga = () => {
  const [manga, setManga] = useState<MangaType>();

  var maxPages: number = Math.floor(Math.random() * 4);
  if (maxPages === 0) {
    maxPages = 1;
  }

  var index: number = Math.floor(Math.random() * 24);

  const handleGetMangaData = () => {
    axios
      .get(`https://api.jikan.moe/v4/top/manga?page=${maxPages}`)
      .then((response) => {
        setManga(response.data.data[index]);
        console.log(response.data.data[index]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetMangaData();
  }, []);

  return manga ? (
    <div>
      <h1>{gamemodeDifficulty}</h1>
      <div>
        <h1>{manga.title}</h1>
        <span>{manga.year}</span>
      </div>
      <img src={manga.images.webp.image_url} alt={manga.title} />
      <Synopsis manga={manga} />
    </div>
  ) : (
    <div>
      <h1>LOADING...</h1>
      <img src={loading} alt="cutie dancing" />
    </div>
  );
};

export default Manga;
