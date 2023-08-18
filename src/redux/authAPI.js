import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { baseUrl } from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: axiosBaseQuery({
    baseUrl: `${baseUrl}/user`,
  }),

  tagTypes: ['authApi'],

  endpoints: builder => ({
    register: builder.mutation({
      query: user => ({
        url: '/register',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['authApi'],
    }),

    verify: builder.query({
      query: token => ({
        url: `/verify/${token}`,
        method: 'GET',
      }),
      invalidatesTags: ['authApi'],
    }),

    login: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['authApi'],
    }),

    refresh: builder.mutation({
      query: token => ({
        url: '/refresh',
        method: 'POST',
        data: token,
      }),
      invalidatesTags: ['authApi'],
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: '/current',
        method: 'GET',
      }),
      providesTags: ['authApi'],
    }),

    updateUserData: builder.mutation({
      query: data => ({
        url: '/update',
        method: 'PATCH',
        data,
      }),
      invalidatesTags: ['authApi'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['authApi'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyQuery,
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useUpdateUserDataMutation,
} = authApi;
