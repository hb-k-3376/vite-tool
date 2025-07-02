let arr: number[] = [1, 2, 3];

let str: string[] = 'a,b,c'.split('');

// generic type
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ['a'];

// 유니온 타입 + array type
let multi: (string | number | boolean)[] = ['hello', 1, true];

multi = [1, 1, 1];
multi = [true, 1, true];

// tuple type array
let tupleA: [number, number] = [2, 1];
let tupleB: [string, number] = ['', 1];

tupleB = ['하이', 2];

// tuples with 다차원 배열
const user: [string, number][] = [
  ['김현빈', 30],
  ['김현빈', 30],
  ['김현빈', 30],
];
