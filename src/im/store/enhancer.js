import { compose } from 'redux';

import middlewares from './middlewares';

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

let composeEnhancers = null;
if (!PRODUCTION_MODE) {
  composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
} else {
  composeEnhancers = compose;
}

export default composeEnhancers(middlewares);
