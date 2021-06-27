import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './components/RenderRoutes';
import Layout from './Layout';
import routes from './routes';

import './style/Main.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RenderRoutes routes={routes} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
