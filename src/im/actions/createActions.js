import { createAction } from 'redux-actions';

export default function (prefix, actions) {
  return Object.keys(actions).reduce((results, key) => {
    results[key] = createAction(`im/${prefix}/${key}`, actions[key]);
    return results;
  }, {});
}
