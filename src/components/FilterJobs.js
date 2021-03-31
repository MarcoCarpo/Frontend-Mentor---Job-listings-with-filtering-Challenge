import { useGlobalContext } from "../context";
import Tablet from "./Tablet";

const FilterJobs = () => {
  const { filterTablets, clearAllTablets } = useGlobalContext();

  return (
    <article
      className={`filter-jobs ${
        filterTablets.length > 0 && "filter-jobs__show"
      }`}
    >
      <div className="filter-jobs__tablets">
        {filterTablets.map((tablet, index) => (
          <Tablet key={index} filterName={tablet} />
        ))}
      </div>
      <button className="filter-jobs__clear" onClick={() => clearAllTablets()}>
        Clear
      </button>
    </article>
  );
};

export default FilterJobs;
