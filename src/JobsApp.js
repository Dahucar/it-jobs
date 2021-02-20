import React from "react";
import { Provider } from 'react-redux';
import { jobStore } from './redux/store/jobStore';
import { JobRouter } from "./router/JobRouter";

export const JobsApp = () => {
  return (
    <Provider store={ jobStore }>
      <JobRouter/>
    </Provider>
  );
};
