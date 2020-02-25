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
  display: grid;
  grid-template-columns: 5% 90%;
  grid-gap: 1rem;
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
  }
`;
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
              <GridWRapper>
              <RootContext.Provider value={reducerArr}>
                <Navigation/>
                {it.component}
              </RootContext.Provider>
              </GridWRapper>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
