import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // get genres of movie
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbKey}`,
    }),
    // get movies by type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // by category = popular, top_rated
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "string") {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbKey}`;
        }
        // by genre= 12 11 10
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "number") {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbKey}`;
        }
        // popular movies
        return `movie/popular?page=${page}&api_key=${tmdbKey}`;
      },
    }),
  }),
});

// redux automatically creates a hook to use in the other components instead of writing all this code again
export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
