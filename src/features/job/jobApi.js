import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      invalidatesTags: ["jobs"],
      query: (data) => ({
        url: "job",
        method: "POST",
        body: data,
      }),
    }),
    applyJob: builder.mutation({
      query: (data) => ({
        url: "apply",
        method: "PATCH",
        body: data,
      }),
    }),
    getJobs: builder.query({
      providesTags: ["jobs"],
      query: () => ({
        url: "jobs",
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `job/${id}`,
      }),
    }),
  }),
});
export const {
  usePostJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApplyJobMutation,
} = jobApi;
