import apiSlice from "./../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "user",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetUserQuery } = authApi;
