import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './tailwind.output.css';
import fbConfig from './config/fbConfig';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
