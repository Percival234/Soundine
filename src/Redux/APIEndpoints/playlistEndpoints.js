import { api } from '@Redux/API/API';

export const playlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: (id) => ({
        url: `playlists/${id}`,
      }),
    }),
    getPopularPlaylists: builder.query({
      query: ({ page = 1, limit }) => ({
        url: `playlists/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getPlaylistsByTags: builder.query({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `playlists/tags?tags=${encodeURIComponent(
          tags
        )}&page=${page}&limit=${limit}&exclude=${exclude}`,
      }),
    }),
    getNewPlaylists: builder.query({
      query: ({ page = 1, limit }) => ({
        url: `playlists/new?page=${page}&limit=${limit}`,
      }),
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  useGetNewPlaylistsQuery,
  useGetPlaylistsByTagsQuery,
  useGetPopularPlaylistsQuery,
} = playlistApi;
