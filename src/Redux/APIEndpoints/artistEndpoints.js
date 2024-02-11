import { api } from '@Redux/API/API';

export const artistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (name) => ({
        url: `artists/${name}`,
      }),
    }),
    getPopularArtists: builder.query({
      query: ({ page = 1, limit }) => ({
        url: `artists/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getArtistsByTags: builder.query({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `artists/tags?tags=${encodeURIComponent(
          tags
        )}&page=${page}&limit=${limit}&exclude=${encodeURIComponent(exclude)}`,
      }),
    }),
  }),
});

export const { useGetArtistQuery, useGetArtistsByTagsQuery, useGetPopularArtistsQuery } = artistApi;
