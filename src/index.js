import React from 'react';
import ReactDOM from 'react-dom/client';
import External from './components/ExternalStyle';

import './style.css';
import reportWebVitals from './reportWebVitals';

const root=ReactDOM.createRoot(document.getElementById("demo-external"));
root.render(
    <External />
);
reportWebVitals();