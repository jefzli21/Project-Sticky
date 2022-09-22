import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/store';
import * as projectActions from './store/projects'
import * as taskActions from './store/tasks'

let store = configureStore({});

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.projectActions = projectActions;
  window.taskActions = taskActions;
}



function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
