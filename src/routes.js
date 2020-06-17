import React, {useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import NewAnime from './pages/AnimeForm';
import Profile from './pages/Profile';
import RootContext from './rootContext';
import {initialState, reducer} from './reducer';

const GridWRapper = styled.div`
  margin: 1rem;
  margin-left: 7rem;
  @media (max-width: 640px) {
    margin-left: 1rem;
  }
`;
const routes = [
  { path: '/', component: <Home/> },
  { path: '/addNew', component: <NewAnime/> },
  { path: '/profile', component: <Profile/> },
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
                <Navigation/>
                <GridWRapper>
                {it.component}
              </GridWRapper>
              </RootContext.Provider>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
