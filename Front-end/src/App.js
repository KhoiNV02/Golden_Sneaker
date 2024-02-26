
import { Fragment, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
function App() {
  return (
    <Routes>
    {publicRoutes.map((route, index) => {
      const Layout = route.layout === null ? Fragment : DefaultLayout;
      const Page = route.component;
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    })}
  </Routes>
  );
}

export default App;
