export interface Movies {
    id: string;
    title: string;
    description: string;
    rating: number;
    duration: string;
    genre: string[];
    releasedDate: string;
    trailerLink: string;
    thumbnail: string;
  }
  
  export interface MoviesIdsAndGenres {
    moviesIds: string[];
    genres: string[];
  }