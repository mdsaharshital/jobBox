import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbox-server-delta.vercel.app/",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["jobs", "job"],
});
export default apiSlice;
