import { useState } from 'react'
import JobCard from "./JobCard";
import jobs from "./jobs";
import "./App.css";

const statuses = {
  1: "Bookmarked",
  2: "Applying",
  3: "Applied",
  4: "Interviewing",
  5: "Negotiating",
  6: "Accepted",
};

function App() {
  const [selectedStatus, setSelectedStatus] = useState(1)
  const jobCards = jobs.map((job, i) => {
    return <JobCard job={job} key={i} />;
  });

  const statusButtons = Object.keys(statuses).map(statusId => {
    return (
      <button
        key={statusId}
      >
        {statuses[statusId]}
      </button>
    )
  })

  return (
    <div className="mx-auto max-w-4xl">
      <h1>Job Application Tracker</h1>
      <div className="grid grid-cols-6 my-4">
        {statusButtons}
      </div>
      {jobCards}
    </div>
  );
}

export default App;