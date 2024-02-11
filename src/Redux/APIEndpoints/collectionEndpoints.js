import { api } from '../API/API';

export const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCollection: builder.query({
      query: (id) => ({
        url: `collections/${id}`,
      }),
    }),
  }),
});

export const { useGetCollectionQuery } = collectionApi;
