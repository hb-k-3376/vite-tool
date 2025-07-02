import type { UserData } from './type';

type User = { name: string; age: number };

type Options = {
  timeout: number;
  condition: boolean;
  data: User[];
};

const defaultOptions = {
  timeout: 1000,
  condition: false,
  data: [{ name: 'tiger', age: 30 }],
};

function delayP(options: Partial<Options>): Promise<User[]> {
  // mixin
  const { timeout, condition, data } = { ...defaultOptions, ...options };

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (condition) res(data);
      else rej({ message: 'error!' });
    }, timeout);
  });
}

delayP({ timeout: 1000, data: [{ name: 'tiger', age: 30 }], condition: false });

// 다른 예시

async function fetchUserData(url: string): Promise<UserData> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

fetchUserData('https://jsonplaceholder.typicode.com/users');
