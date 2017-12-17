import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { configStore } from './store';
import sessionActions from './actions/session';
import App from './components/App';

const store = configStore();
store.dispatch(sessionActions.loadSession());

function render(mountPoint) {
  ReactDOM.render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    mountPoint
  );
}

render(document.getElementById('im-mount-point'));
