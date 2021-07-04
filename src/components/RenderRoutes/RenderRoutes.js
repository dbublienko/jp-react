// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router';

type Props = {
  routes: Array<Object>,
};

type RouteType = {
  path: string,
  exact?: boolean,
  key: string,
  component: React.Node,
};

const RenderRoutes = (props: Props): React.Node => (
  <>
    <Switch>
      {props.routes.map((route: RouteType) => (
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
