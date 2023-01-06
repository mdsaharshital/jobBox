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
      invalidatesTags: ["job"],
    }),
    askQuestion: builder.mutation({
      query: (data) => ({
        url: "query",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["job"],
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["job"],
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
      providesTags: ["job"],
    }),
    getAppliedJob: builder.query({
      query: (email) => ({
        url: `applied-jobs/${email}`,
      }),
    }),
  }),
});
export const {
  usePostJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApplyJobMutation,
  useGetAppliedJobQuery,
  useAskQuestionMutation,
  useReplyMutation,
} = jobApi;
