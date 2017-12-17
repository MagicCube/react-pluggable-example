import { createStore } from 'redux';

import enhancer from './enhancer';
import reducers from '../reducers';

export function configStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );
  return store;
}
