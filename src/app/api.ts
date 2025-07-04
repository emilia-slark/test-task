import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovieDetailed, IResponseSearch } from "../utils/types";
import { IMovie } from "../utils/types";
import { API_KEY, API_URL } from "../utils/constants";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getMoviesByName: build.query<Partial<IMovie>[], string>({
      query: (name) => `/?apikey=${API_KEY}&s=${name}`,
      transformResponse: (response: IResponseSearch) => response.Search
    }),
    getMovieById: build.query<IMovieDetailed, string>({
      query: (id) => `/?apikey=${API_KEY}&plot=full&i=${id}`,
    transformResponse: (response: any) =>  ({
        Title:    response.Title,
        Plot:     response.Plot,
        Year:     response.Year,
        Poster:   response.Poster,
        imdbID:   response.imdbID,
        details: {
          Released:  response.Released,
          Country:   response.Country,
          Genre:     response.Genre,
          Runtime:   response.Runtime,
          Director:  response.Director,
          Writer:    response.Writer,
          Metascore: response.Metascore,
        }
      })
    }),
  }),
})

export const { useGetMoviesByNameQuery, useGetMovieByIdQuery } = api;