import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoApp from './Demo';
import People from "./People";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <DemoApp name="SUMIT KUMAR"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <DemoApp name="SUMIT KUMAR TEST 2"/>
//   </React.StrictMode>,
//   document.getElementById('root2')
// );
//FOR CREATING SIMPLY SAME DOM
// ReactDOM.render(
//   <React.StrictMode>
//     <People id="1" name="SUMIT" work="java Developer"/>
//     <People id="2" id="1" name="Himanshu" work="java Developer" />
//     <People id="3" name="Anubhav" work="Mean stack Developer"/>
//     <People id="4" name="Gaju" work="java Developer"/>
//     <People id="5" name="Saransh" work="java Developer"/>
//   </React.StrictMode>,
//   document.getElementById('peoples_div')
// );

// CREATING DOM WITH ARRAY....
ReactDOM.render(
  <React.StrictMode>
    <People/>
  </React.StrictMode>,
  document.getElementById('peoples_div')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
