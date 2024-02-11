import { api } from '@Redux/API/API';

export const userApi = api.injectEndpoints({
  tagTypes: ['User'],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (userData) => ({
        url: 'user/sign-in',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: 'user/sign-up',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    current: builder.query({
      query: () => ({
        url: 'user',
      }),
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    toggleFavorites: builder.mutation({
      query: (favoritesData) => ({
        url: 'user/favorites',
        method: 'POST',
        body: favoritesData,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: 'user',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCurrentQuery,
  useLazyCurrentQuery,
  useSignInMutation,
  useSignUpMutation,
  useToggleFavoritesMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUploadPhotoMutation,
} = userApi;
