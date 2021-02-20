import React from "react";
import { useSelector } from "react-redux";
import { JobItem } from "./JobItem";
import { SprinnerComponent } from "../UI_Components/SprinnerComponent";
import { MessageComponent } from "../UI_Components/MessageComponent";

export const JobsListComponent = () => {
  const { jobs, loading } = useSelector((state) => state.job);
  if (loading) 
    return <SprinnerComponent />;

  return (
    <div className="row mt-4">
      {jobs.length !== 0 ? (
        jobs.map((item) => (
          <JobItem
            key={item.id}
            company={item.company}
            location={item.location}
            title={item.title}
            type={item.type}
            urlJob={item.url}
          />
        ))
      ) : (
        <MessageComponent 
          msg="no hay trabajos para mostrar"
          typeAlert="alert-danger"  
        />
      )}
    </div>
  );
};
