import { useEffect, useState, CSSProperties, useRef } from "react";
import axios from "axios";
import { MangaType } from "../manga";
import Chevron from "react-chevron";
import SyncLoader from "react-spinners/SyncLoader";
import "./Row.scss";

const loadingColor: string = "aqua";
const override: CSSProperties = {
  textAlign: "center",
  paddingTop: "1.5rem",
};

const Row = (props: {
  title: string;
  fetchUrl: string;
  appearAfter: boolean;
}) => {
  const [manga, setManga] = useState<MangaType[]>();
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (props.appearAfter === true) {
        await delay(2000);
      }
      const results = await axios.get(props.fetchUrl);
      setManga(results.data.data);
      return results;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-header">{props.title}</h2>
      {manga ? (
        <div className="row-posters" ref={rowRef}>
          <div
            className={`row-chevron row-chevron-left ${!isMoved && "hidden"}`}
            onClick={() => handleClick("left")}
          >
            <Chevron direction={"left"} />
          </div>
          {manga?.map((manga) => (
            <div className="row-item" key={manga.mal_id} title={manga.title}>
              <div className="card-container">
                <a target="blank" href={manga.url}>
                  <img
                    className="card-img"
                    src={manga.images.webp.image_url}
                    alt={manga.title}
                  />
                </a>
              </div>
            </div>
          ))}
          <div
            className="row-chevron row-chevron-right"
            onClick={() => handleClick("right")}
          >
            <Chevron direction={"right"} />
          </div>
        </div>
      ) : (
        <SyncLoader color={loadingColor} cssOverride={override} />
      )}
    </div>
  );
};

export default Row;
