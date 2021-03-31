export const reducer = (state, action) => {
  let newFilterTablets = [];
  switch (action.type) {
    case "ADD_FILTER":
      newFilterTablets = !state.filterTablets.find(
        (tablet) => tablet === action.payload
      )
        ? [...state.filterTablets, action.payload]
        : [...state.filterTablets];
      return {
        ...state,
        filterTablets: newFilterTablets,
      };

    case "REMOVE_FILTER":
      newFilterTablets = state.filterTablets.filter(
        (tablet) => tablet !== action.payload
      );
      return { ...state, filterTablets: newFilterTablets };

    case "FILTER_JOBS":
      const newJobs = (job) => {
        const jobTablets = [
          ...job.tools,
          ...job.languages,
          job.role,
          job.level,
        ];

        if (
          state.filterTablets.every((filterTab) =>
            jobTablets.includes(filterTab)
          )
        ) {
          return job;
        }
      };

      const newFilterJobs = state.jobs.filter((job) => newJobs(job));
      return { ...state, filteredList: newFilterJobs };

    case "CLEAR_ALL_ITEMS":
      return { ...state, filterTablets: [] };

    default:
      return state;
  }
};
