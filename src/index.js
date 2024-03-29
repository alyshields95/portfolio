import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss/_index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();