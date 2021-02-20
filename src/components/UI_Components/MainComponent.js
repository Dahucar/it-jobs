import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadJobs } from '../../redux/actions/jobAction';
import { JobsListComponent } from '../JobsComponents/JobsListComponent'
import { FindComponent } from './FindComponent'

export const MainComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadJobs());
    }, [dispatch])
    return (
        <div className="container-sm">
            <FindComponent/>
            <JobsListComponent/>
        </div>
    )
}
