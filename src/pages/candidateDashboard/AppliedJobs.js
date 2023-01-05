import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import { useGetAppliedJobQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobQuery(email);
  if (isLoading) {
    return <p></p>;
  }
  console.log("", data);
  return (
    <div className="px-2">
      <h1 className="text-xl py-5 ">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-5 pb-5">
        {data?.data?.map((job) => (
          <JobCard jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
