import axios from "axios";
import { types } from "../types/types";
const api_url = "https://api.allorigins.win/get?url=";

export const loadJobs = (filters = "code") => {
  return async (dispatch) => {
    dispatch(startLoadingOnState());
    try {
      const api = "https://jobs.github.com/positions.json?search=" + filters;
      const response = await axios.get(api_url + api);
      const { contents } = response.data;
      const jobs = JSON.parse(contents);
      dispatch(saveJobsOnStore(jobs));
      dispatch(finishLoadingOnState());
    } catch (error) {
      console.error(error);
    }
  };
};

const saveJobsOnStore = (jobs) => ({
  type: types.startLoadJobs,
  payload: jobs,
});

const startLoadingOnState = () => ({
  type: types.startLoadingJobsUI
});

const finishLoadingOnState = () => ({
  type: types.finishLoadingJobsUI
});