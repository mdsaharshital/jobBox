import React from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../features/job/jobApi";
import { Link } from "react-router-dom";

const EmployerDashboard = () => {
  const { data, isLoading } = useGetJobsQuery();
  const { user } = useSelector((state) => state.auth);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  const myJobs = data?.data.filter((job) => job.jobPostedBy === user.email);
  console.log("", myJobs);
  const content =
    myJobs.length === 0 ? (
      <p className="text-xl text-red-500 text-center my-5">
        No jobs posted yet
      </p>
    ) : (
      <div className="px-6 ">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4"
                >
                  Position
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4"
                >
                  Applicants
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4"
                >
                  Heading
                </th>
              </tr>
            </thead>
            <tbody>
              {myJobs.map((job, index) => (
                <tr class="border-b" key={index}>
                  <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap transition-all hover:text-blue-700">
                    <Link to={`/job-details/${job._id}`}>{job.position}</Link>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {job.applicants.length === 0
                      ? 0
                      : job.applicants.length + 1}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer hover:underline hover:text-blue-700">
                    <Link to={`/job-details/${job._id}`}>details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

  return (
    <div className="my-4">
      <h1 className="text-xl">Employer Dashboard</h1>
      {content}
    </div>
  );
};

export default EmployerDashboard;
