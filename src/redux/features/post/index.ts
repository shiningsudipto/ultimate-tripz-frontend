import baseApi from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(filters).toString();
        return {
          url: `/post/all-posts?${params}`,
        };
      },
      providesTags: ["Post"],
    }),
    getPopularPosts: builder.query({
      query: () => "/post/popular",
    }),
    getPostDetails: builder.query({
      query: (id) => `/post/single-post/${id}`,
    }),
    getPostByAuthor: builder.query({
      query: (id) => `/post/posts-by-author/${id}`,
    }),
    createPost: builder.mutation({
      query: (postInfo) => ({
        url: "/post/create-post",
        method: "POST",
        body: postInfo,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPopularPostsQuery,
  useGetPostDetailsQuery,
  useGetPostByAuthorQuery,
  useCreatePostMutation,
} = postApi;
