import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const todotitle = "Javascrip element";
const date = new Date();
const currentdate = date.getDay();
const currentmonth = date.getMonth();
const currentyear = date.getFullYear();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="headingstyle">This is Joti</h1>
    <h2>{todotitle}</h2>
    <h3>This is Joti</h3>
    <p>This is Joti</p>
    <p>{currentdate + "/" +currentmonth + "/" + currentyear}</p>
  </div>
);

reportWebVitals();
