import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { loadJobs } from "../../redux/actions/jobAction";

export const FindComponent = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    findJob: "",
  });

  const handlerFindJob = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const { findJob } = formValues;
  const handlerFindSubmit = (e) => {
    e.preventDefault();
    if (findJob === "") {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please!. Enter a filter param.',
      })
    }
    dispatch(loadJobs(findJob));
  };

  return (
    <form onSubmit={handlerFindSubmit} className="mt-2">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter yout favorite lenguaje"
          name="findJob"
          onChange={handlerFindJob}
        />
        <button type="submit" className="btn btn-outline-success">
          find
        </button>
      </div>
    </form>
  );
};
