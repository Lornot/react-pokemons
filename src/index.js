import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';

import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Body />,
  document.getElementById('main_block')
);