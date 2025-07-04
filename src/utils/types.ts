export interface IMovie {
  Title: string,
  Plot?: string
  Year: string,
  Poster: string,
  imdbID: string
}

export interface IMovieDetailed extends IMovie {
  details: {
    Released: string,
    Country: string,
    Genre: string,
    Runtime: string,
    Director: string,
    Writer: string,
    Metascore: string
  }
}

export interface IResponseSearch {
  Respone: string,
  Search: Partial<IMovie>[],
  totalResults: string
}