import { api } from '@Redux/API/API';

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: ({ query, limit }) => ({
        url: `/search?query=${query}&limit=${limit}`,
      }),
    }),
  }),
});

export const { useLazySearchQuery } = searchApi;
