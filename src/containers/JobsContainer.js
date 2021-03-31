import Job from "../components/Job";
import { useGlobalContext } from "../context";

const JobsContainer = () => {
  const { filteredList } = useGlobalContext();

  return (
    <section className="jobs-container">
      {filteredList.map((job) => {
        const { id } = job;

        return (
          <Job
            key={id}
            {...job}
            newJob={job.new}
            jobInfo={[job.postedAt, job.contract, job.location]}
            jobTablets={[job.role, job.level, ...job.languages, ...job.tools]}
          />
        );
      })}
    </section>
  );
};

export default JobsContainer;
