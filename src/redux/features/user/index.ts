import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user-info",
    }),
    getUserInfoById: builder.query({
      query: (id) => `/user-by-id/${id}`,
      providesTags: ["User", "Post"],
    }),
    updateUserInfo: builder.mutation({
      query: ({ id, userInfo }) => ({
        url: `/update-user/${id}`,
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/update-user-role/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUpdateUserRoleMutation,
  useGetUserInfoByIdQuery,
} = userApi;
