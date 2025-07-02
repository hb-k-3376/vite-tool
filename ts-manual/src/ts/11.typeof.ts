const user = {
  name: 'tiger',
  age: 30,
  gender: 'male',
  address: '남양주시',
};

// 객체의 모든 타입을 뽑아내는 연산자.
// 자바스크립트의 typeof와 잘 구분해야한다.
// 복잡한 response 데이터를 타입으로 뽑아낼때 사용한다.
type User = typeof user;

// js typeof
if (typeof user === 'string') {
  //
}

// keyof { 넣고 싶은 타입 }
// 키들만 뽑는 keyof 연산자
// 유니온 타입으로 만들어 준다.
type UserKey = keyof User;

const settings = {
  theme: 'dark',
  fontSize: 16,
  language: 'ko',
};

type SettingsKey = keyof typeof settings;
