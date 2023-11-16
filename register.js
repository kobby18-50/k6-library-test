import http from 'k6/http';

export default function () {
  const url = 'https://svelte-library-auth-3-0.vercel.app/auth/register';
  const payload = JSON.stringify({
    firstName: 'aaa',
    lastName: 'bbb',
    email: 'bbb',
    password : 'pass'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
