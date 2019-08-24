import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import data from './data';
import { ResumeProvider } from './ResumeContext';

import App from './components/App';

ReactDOM.render(
  <ResumeProvider value={data}>
    <App />
  </ResumeProvider>,
  document.getElementById('root')
);
