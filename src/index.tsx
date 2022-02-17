import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import { AppStarter } from './AppStarter';
import { setViewModelModules } from './application/appModules/viewModels';
import { setServiceModules } from './application/appModules/services';
import { setRepositoryModules } from './application/appModules/repositories';
import ErrorBoundary from './application/pages/errorBoundary/ErrorBoundary';

AppStarter.initialize((commonContext) => {
  setRepositoryModules();
  setServiceModules();
  setViewModelModules();
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
