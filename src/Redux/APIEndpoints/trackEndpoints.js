import { api } from '@Redux/API/API';

export const trackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrack: builder.query({
      query: (id) => ({
        url: `tracks/${id}`,
      }),
    }),
    getPopularTracks: builder.query({
      query: ({ page = 1, limit }) => ({
        url: `tracks/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getTracksByTags: builder.query({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `tracks/tags?tags=${encodeURIComponent(
          tags
        )}&page=${page}&limit=${limit}&exclude=${exclude}`,
      }),
    }),
    getNewTracks: builder.query({
      query: ({ page = 1, limit }) => ({
        url: `tracks/new?page=${page}&limit=${limit}`,
      }),
    }),
    getRandomTrack: builder.query({
      query: () => ({
        url: 'tracks/random',
      }),
    }),
  }),
});

export const {
  useGetRandomTrackQuery,
  useGetTrackQuery,
  useGetNewTracksQuery,
  useGetTracksByTagsQuery,
  useGetPopularTracksQuery,
} = trackApi;
