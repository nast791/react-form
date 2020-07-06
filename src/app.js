import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import GlobalStyle from "./global.style";
import Home from "./app/pages/Home/Home";

const app = (
  <React.Fragment>
    <GlobalStyle/>
    <Home/>
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById('root'));