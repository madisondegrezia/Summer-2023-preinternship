import { useState } from "react";

const AddJobForm = () => {
  const [jobFormState, setJobFormState] = useState({
    title: "",
    company: "",
    location: "",
    minSalary: 0,
    maxSalary: 0,
    postDate: "",
    jobPostURL: "",
  });

  const {
    title,
    company,
    location,
    minSalary,
    maxSalary,
    postDate,
    jobPostURL,
  } = jobFormState;

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setJobFormState((jobFormState) => {
      return {
        // making shallow copy of old object
        ...jobFormState,
        // computed property notation
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddJobFormSubmit = (e) => {
    e.preventDefault();
    setJobs((jobs) =>
      jobs.concat({
        ...jobFormState,
        minSalary: parseInt(jobFormState.minSalary),
        maxSalary: parseInt(jobFormState.maxSalary),
        status: 1,
      })
    );
    setIsModalVisible(false);
    setJobFormState({
      title: "",
      company: "",
      location: "",
      minSalary: 0,
      maxSalary: 0,
      postDate: "",
      jobPostURL: "",
    });
  };
  return (
    <>
      <form
        onSubmit={handleAddJobFormSubmit}
        className="selection:bg-blue-200 flex flex-col gap-1"
      >
        <h1>Add Job Posting</h1>
        <fieldset className="flex flex-col">
          <label htmlFor="title">Job Title</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="title"
            id="title"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="company">Company</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="company"
            id="company"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="location"
            id="location"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="minSalary">Salary Range</label>
          <div className="flex items-center gap-2">
            <input
              onChange={handleInputChange}
              type="number"
              name="minSalary"
              id="minSalary"
              className="bg-white border-4 focus:outline-none p-2"
            />{" "}
            -
            <input
              onChange={handleInputChange}
              type="number"
              name="maxSalary"
              id="maxSalary"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </div>
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="postDate">postDate</label>
          <input
            onChange={handleInputChange}
            type="date"
            name="postDate"
            id="postDate"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="jobPostURL">Original Job Post URL</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="jobPostURL"
            id="jobPostURL"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <input
          className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer py-2 text-white"
          type="submit"
        />
      </form>
      ;
    </>
  );
};

export default AddJobForm;
