import { useGlobalContext } from "../context";

const Job = ({
  company,
  newJob,
  featured,
  position,
  jobInfo,
  jobTablets,
  logo,
}) => {
  const { addFilter } = useGlobalContext();

  return (
    <article
      className={`job ${newJob && featured ? "job__highlighted" : null}`}
    >
      <div className="job__image-container">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="job__upper">
        <div className="job__upper-company">
          <h3 className="job__company">{company}</h3>
          <div className="job__new-feat">
            {newJob ? (
              <span className="job__feat job__feat--new">NEW!</span>
            ) : null}
            {featured ? (
              <span className="job__feat job__feat--featured">FEATURED</span>
            ) : null}
          </div>
        </div>
        <h2 className="job__position">{position}</h2>
        <div className="job__info">
          {jobInfo.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </div>
      </div>
      <hr className="job__split" />
      <div className="job__tablets">
        {jobTablets.map((tablet, index) => (
          <button
            key={index}
            className="job__tablet"
            onClick={() => addFilter(tablet)}
          >
            {tablet}
          </button>
        ))}
      </div>
    </article>
  );
};

export default Job;
