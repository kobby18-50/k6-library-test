import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  vus: 100,
  duration: '30s',
};
export default function () {
  http.get('https://svelte-library-auth-3-0.vercel.app/');
  sleep(1);
}
