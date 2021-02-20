import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HeaderComponent } from '../components/UI_Components/HeaderComponent';
import { MainComponent } from '../components/UI_Components/MainComponent';
export const JobRouter = () => {
    return (
        <Router>
            <HeaderComponent/>
            <Switch>
                <Route exact path="/" component={ MainComponent }/>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
