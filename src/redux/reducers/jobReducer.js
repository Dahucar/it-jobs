import { types } from "../types/types";

const initialState = {
  jobs: [],
  loading: false,
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLoadJobs:
      return {
        ...state,
        jobs: [...action.payload],
      };
    case types.startLoadingJobsUI:
      return {
        ...state,
        loading: true,
      };
    case types.finishLoadingJobsUI:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
