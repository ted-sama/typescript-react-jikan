export interface MangaType {
  duration: string;
  episodes: number;
  genres: {
    name: string;
  };
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };

    webp: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
  mal_id: number;
  rank: number;
  score: number;
  status: string;
  synopsis: string;
  themes: {
    name: string;
  };
  title: string;
  title_english: string;
  title_japanese: string;
  year: number;
  url: string;
}
