const endpoint: string = "https://api.jikan.moe/v4";
const mangaId: string = "1706";
const animeId: string = "48661";

const requests = {
  fetchTopMangaAll: `${endpoint}/top/manga`,
  fetchTopAnimeAll: `${endpoint}/top/anime`,
  fetchTopAnimeAiring: `${endpoint}/top/anime?filter=airing`,
  fetchTopAnimeByPopularity: `${endpoint}/top/anime?filter=bypopularity`,
  fetchTopAnimeUpcoming: `${endpoint}/top/anime?filter=upcoming`,
  fetchMangaFeatured: `${endpoint}/manga/${mangaId}/full`,
  fetchAnimeFeatured: `${endpoint}/anime/${animeId}/full`,
};

export default requests;
