/** Utility type */

// 유틸리티 타입은 말 그래돌 타입 스크립트가 미리만들어 좋은타입

/** Omit<T, K>
 *   T : type
 *   K : key
 *  Omit은 타입 T에서 속성 K를 제거한 새로운 타입을 만든다.
 *  생략 이라는 의미를 가진다.
 */

type User = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Omit<User, 'email'>;

const user: PublicUser = {
  id: 1,
  name: 'tiger',
};

/** Pick<T, K>
 *   T : type
 *   K : key
 *   Pick은 타입 T에서 속성 K만 뽑아서 새로운 타입을 만든다.
 */

const user2: Pick<User, 'id' | 'name'> = {
  id: 2,
  name: 'beom',
};

/** Partial<T>
 *   T : type
 *   타입 T의 모든 속성을 선택적(optional) 으로 만듭니다.
 */

type User3 = {
  id: number;
  name: string;
  email: string;
  address: {
    lat: number;
    long: number;
  };
};

type P = Partial<User3>;

// 모든 타입을 옵셔널로 변경해서 에러가 안남
const user3: P = {
  name: 'bin',
};

/** Required<T>
 *   T : type
 *   타입 T의 모든 속성을 필수로 만듭니다.
 */

const user5: Required<User3> = {
  id: 1,
  name: 'tiger',
  email: '123@123',
  address: {
    long: 123,
    lat: 123,
  },
};

/** Readonly<T>
 *   T : type
 *   타입 T의 모든 속성을 읽기 전용으로 만듭니다.
 */

const user6: Readonly<User3> = {
  id: 10,
  name: 'tiger',
  email: '123@123.com',
  address: {
    lat: 123,
    long: 123,
  },
};

/** Record<K, T>
 *   K : key
 *   T : type
 *   key 값 K와 value 타입 T를 갖는 객체 타입을 생성합니다.
 */

type Role = keyof typeof access;

type RoleStatus = Record<keyof typeof access, boolean | string>;

const access = {
  admin: true,
  user: true,
  guest: '진찌야',
} as const;
