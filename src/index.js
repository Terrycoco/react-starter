import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'routes/App';

import 'styles/project.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
   rootElement
)