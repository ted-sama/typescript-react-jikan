import { MangaType } from "../manga";
import { useEffect, useState } from "react";
import Manga from "./Manga";

const Synopsis = (props: { manga: MangaType }) => {
  const [synopsis, setSynopsis] = useState<boolean>(false);

  const displaySynopsis = () => {
    setSynopsis(!synopsis);
  };

  return synopsis ? (
    <div>
      <button onClick={displaySynopsis}>Hide synopsis</button>
      <p>{props.manga.synopsis}</p>
    </div>
  ) : (
    <button onClick={displaySynopsis}>Display synopsis</button>
  );
};

export default Synopsis;
