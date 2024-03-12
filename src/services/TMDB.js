import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
// /movie/popular?language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // get movies by type
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbKey}`,
    }),
  }),
});

// redux automatically creates a hook to use in the other components instead of writing all this code again
export const { useGetMoviesQuery } = tmdbApi;
