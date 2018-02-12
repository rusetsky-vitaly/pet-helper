import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

import './scss/style.scss';
import './scss/popup.scss';
import './scss/header.scss';
import './scss/footer.scss';
import './scss/tags.scss';
import './scss/pet.scss';
import './scss/unit.scss';
import './scss/dropdown.scss';
import './scss/account.scss';
import './scss/login.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
