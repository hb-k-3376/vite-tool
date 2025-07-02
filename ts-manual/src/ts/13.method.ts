const arr = [1, 2, 3];

arr.map((item) => {
  return item;
});

type Map = <T, U>(arr: T[], f: (n: T) => U) => U[];

const map: Map = (arr, f) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
  }

  return result;
};

map(arr, (item) => item);

type Callback<T> = (a: T, i: number) => void; // 제네릭 타입
type ForEach = <T>(arr: T[], f: Callback<T>) => void; // ForEach는 제네릭을 참조하고 있는 타입

// 화살표 함수는 변수에 함수를 할당하는 구조 이기 떄문에 파라미터를 받는 () 앞에 제네릭을 설정하는 것이다.
const forEach: ForEach = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(f(arr[i], i));
  }
};

// forEach<number, string>(arr, (a,i) => con);

interface _Callback<T> {
  (a: T, i: number): boolean;
}

interface Filter {
  <T>(arr: T[], f: _Callback<T>): T[];
}

const filter: Filter = (arr, f) => {
  let result = [];
  let i = 0;
  for (const a of arr) {
    if (f(a, i++)) result.push(a);
  }
  return result;
};

/** reduce f */

type _Cb<T, U> = (acc: U, a: T, i: number) => U;
type Reduce = <T, U>(arr: T[], f: _Cb<T, U>, initial: U) => U;

const reduce: Reduce = (arr, f, initial) => {
  let acc = initial;

  let i = 0;
  for (const a of arr) {
    acc = f(acc, a, i++);
  }

  return acc;
};

reduce(arr, (acc, a, i) => acc + a, 0);
