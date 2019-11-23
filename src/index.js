import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// see https://github.com/facebook/react-native/issues/14796
import Buffer from 'buffer';
import { URL, URLSearchParams } from 'url';

global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
