import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mediacard from './components/Mediacard';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App name="Kishor Kumar"/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <Mediacard title="Media Card Component Task" body="I's Media Card Body "imageurl="https://i.pinimg.com/originals/ed/81/6a/ed816aecae4f7ca72a83ffbbf7a7ccf8.jpg"/>,
  document.getElementById('root2')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
