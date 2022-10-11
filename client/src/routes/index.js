import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from 'pages/Login';
import Jobs from 'pages/Jobs';
import PrivateRoute from "../components/PrivateRoute";
import ProvideAuth from '../components/ProvideAuth'


const Routes = () => {
    return (
      <ProvideAuth>
        <div className="routes-wrapper">
            <Switch>
              <Route path="/login" exact>
                <Login/>
              </Route>
                <PrivateRoute path="/" exact>
                  <Jobs/>
                </PrivateRoute>
                {/* 404 page - DO NOT CHANGE LOCATION */}
                <Route path="*" status={404}/>
            </Switch>
        </div>
      </ProvideAuth>
    );
};

export default Routes;