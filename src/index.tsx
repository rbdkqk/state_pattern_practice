import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import { AppStarter } from './AppStarter';
import { setViewModelModules } from './application/appModules/viewModels';
import { setServiceModules } from './application/appModules/services';
import { setRepositoryModules } from './application/appModules/repositories';
import ErrorBoundary from './application/pages/errorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

AppStarter.initialize((commonContext) => {
  setRepositoryModules();
  setServiceModules();
  setViewModelModules();
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
