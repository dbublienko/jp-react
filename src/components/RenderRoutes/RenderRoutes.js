import React from 'react';
import { Switch, Route } from 'react-router';

const RenderRoutes = ({ routes }) => (
  <>
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          key={route.key}
          component={route.component}
        />
      ))}
    </Switch>
  </>
);

export default RenderRoutes;
