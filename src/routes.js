import React, {useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewAnime from './pages/AnimeForm';
import Profile from './pages/Profile';
import RootContext from './rootContext';
import {initialState, reducer} from './reducer';
const routes = [
  { path: '/', component: <Home /> },
  { path: '/addNew', component: <NewAnime/> },
  { path: '/profile', component: <Profile /> },
];
const Routes = () => {
  // const history = useHistory();
  const reducerArr = useReducer(reducer, initialState);
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((it, index) => (
            <Route path={it.path} key={index} exact>
              <RootContext.Provider value={reducerArr}>
                {it.component}
              </RootContext.Provider>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
