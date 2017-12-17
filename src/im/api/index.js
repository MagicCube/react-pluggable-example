import axios from 'axios';

export function loadSession() {
  return axios.get('/session-data.json');
}
