import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <div className='Global'>
      <Routes />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
