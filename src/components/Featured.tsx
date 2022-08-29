import { useState, useEffect } from "react";
import axios from "axios";
import { MangaType } from "../manga";
import "./Featured.scss";

const Featured = (props: { fetchUrl: string; billboardImage: string }) => {
  const [manga, setManga] = useState<MangaType>();

  useEffect(() => {
    async function fetchData() {
      const results = await axios.get(props.fetchUrl);
      setManga(results.data.data);
      return results;
    }
    fetchData();
  }, []);

  return (
    <a target="blank" href={manga?.url}>
      <div className="featured-billboard">
        <img src={props.billboardImage} alt="" className="featured-image" />
        <div className="featured-billboard-manga">
          <h2 className="featured-title">{manga?.title}</h2>
          <p className="featured-description">{manga?.synopsis}</p>
        </div>
        <div className="featured-billboard-utils"></div>
      </div>
    </a>
  );
};

export default Featured;
