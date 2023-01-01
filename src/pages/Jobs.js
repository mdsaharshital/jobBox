import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useGetJobsQuery();
  console.log("", data);
  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        {data?.data?.map(({ _id, position, companyName }) => (
          <div className="border-2 p-3 my-4">
            <h1>{position}</h1>
            <p className="text-sm ml-2 text-slate-500">{companyName}</p>
            <button
              className="border btn my-3"
              onClick={() => navigate(`/job-details/${_id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
