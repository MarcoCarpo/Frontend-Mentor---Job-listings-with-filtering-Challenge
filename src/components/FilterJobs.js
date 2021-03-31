import Tablet from "./Tablet";

const FilterJobs = () => {
  return (
    <article className="filter-jobs">
      <div className="filter-jobs__tablets">
        <Tablet />
        <Tablet />
        <Tablet />
      </div>
      <button className="filter-jobs__clear">Clear</button>
    </article>
  );
};

export default FilterJobs;
