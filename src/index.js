import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestComponent from './test';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
   <TestComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
