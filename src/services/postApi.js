import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
   reducerPath: "postApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com/",
   }),
  endpoints: (builder) => ({
   
   getPosts: builder.query({
      query: () => "posts",
    }),
  
    getComments: builder.mutation({
       query(data) {
         const {id} = data
         return {
            url: `/comments?postId=${id}`,
           method: "GET",
         };
       },
   
    }),
    getUserInfo: builder.mutation({
      query(data) {
         const {id} = data
         return {
            url: `users/${id}`,
            method: "GET",
         };
       },
    }),
    getUserPosts: builder.mutation({
      query(data) {
         const {id} = data
         return {
            url: `users/${id}/posts`,
            method: "GET",
         };
       },
    }),    
  }),
});


export const { useGetPostsQuery, useGetCommentsMutation, useGetUserInfoMutation, useGetUserPostsMutation  } = postApi;