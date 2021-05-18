import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, UserCreation } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/usercreation" component={UserCreation} />
    </Switch>
  );
};

export default Routes;
