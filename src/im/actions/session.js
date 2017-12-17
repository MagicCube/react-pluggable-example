import { loadSession } from '../api';
import createActions from './createActions';

export default createActions('session', {
  async loadSession() {
    const res = await loadSession();
    return res.data;
  }
});
