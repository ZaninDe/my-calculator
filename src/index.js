import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);