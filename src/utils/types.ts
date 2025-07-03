export interface IMovie {
  Title: string,
  Plot?: string
  Year: string,
  Poster: string,
  imdbID: string
}

export interface IMovieDetailed extends IMovie {
  Director: string,
  Released: string,
  Country: string,
  Genre: string,
  Writer: string,
  Runtime: string,
  Metascore: string
}

export interface IResponseSearch {
  Respone: string,
  Search: Partial<IMovie>[],
  totalResults: string
}