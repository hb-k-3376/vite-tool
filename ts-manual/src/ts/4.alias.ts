// type, interface
// 타입을 지정할 때는 무조건 대문자로 설정 파스칼 케이스
type User1 = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

// address 가 추가된 확장된 User2
// &를 이용해서 확장 시킨다.
type User2 = User1 & { address: string };

const user1: User1 = {
  id: 1,
  name: '하이',
  auth: 'admin',
  isPaid: true,
};

const user2: User2 = {
  id: 2,
  name: '바이',
  auth: 'user',
  isPaid: false,
  address: '경기남부',
};

// interface

interface User3 {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}
// 인터페이스는 동일한 식별자를 사용하면 추가가 된다.
// interface User3 {
//   address: string;
// }

// extends를 이용해서 확장 시킬 수 있다
// 위의 방법보다 extends를 이용해서 확장시키는 방법이 더 안전하다.
interface User4 extends User3 {
  address: string;
}

// 두 방법 다 사용 가능하다.
const user3: User3 & { address: string } = {
  // const user3: User4 = {
  id: 3,
  name: 'sun',
  auth: 'user',
  isPaid: true,
  address: '안산',
};

// index signature

type Person = {
  name: string;
  age: number;
  email: string;
  [key: string]: string | number; // 키값을 동적으로 받아야할때 사용한다.
};

const person: Person = {
  name: '현빈',
  age: 30,
  email: '123123@123123',
  gender: 'male',
  phone: 123123123,
};
