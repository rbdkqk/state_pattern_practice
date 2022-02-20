import React, { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { ROUTES } from './pages/routes/routes';
import { Route } from 'react-router';
import SuspensePage from './pages/suspensePage/SuspensePage';

function App() {
  return (
    <Suspense fallback={() => SuspensePage}>
      <Routes>
        {ROUTES.map((route, index) => {
          return (
            <Route key={`${route.path}_${index}`} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
