import { handleActions } from 'redux-actions';

import actions from '../actions/session';

const initialStates = {
  messages: [],
  error: null
};

export default handleActions({
  [actions.loadSession](state, { error, payload }) {
    if (!error) {
      return payload;
    }
    console.error(payload);
    return {
      error: payload
    };
  }
}, initialStates);
