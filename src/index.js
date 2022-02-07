import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'


ReactDOM.render(
    <BrowserRouter basename='/Portfolio'>
      <Suspense fallback={<Spinner/>}>
        <App />
      </Suspense>
    </BrowserRouter>,
  document.getElementById('root')
);


