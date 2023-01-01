import React from "react";

import { useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  const { data } = useGetJobByIdQuery(id);
  const { data: jobData } = data || {};
  console.log("", data);
  return (
    <div className="pt-14">
      <h1>this is job details</h1>
      <div className="border-2 p-3 my-4">
        <h1>{jobData?.position}</h1>
        <p className="text-sm ml-2 text-slate-500">{jobData?.companyName}</p>
        <button className="border btn my-3">Apply</button>
      </div>
    </div>
  );
};

export default JobDetails;
