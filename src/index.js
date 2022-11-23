import React from 'react';
import ReactDOM from 'react-dom/client';
import { DetailsMioMio } from './DetailsMioMio';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import { IndexMioMio } from './IndexMioMio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <IndexMioMio/> */}
    <DetailsMioMio/>
  </React.StrictMode>
);

reportWebVitals();
