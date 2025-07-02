let arr = [1, 2, 3];
let str = 'a,b,c'.split('');
// generic type
let _arr = [1, 2, 3];
let _str = ['a'];
// 유니온 타입 + array type
let multi = ['hello', 1, true];
multi = [1, 1, 1];
multi = [true, 1, true];
// tuple type array
let tupleA = [2, 1];
let tupleB = ['', 1];
tupleB = ['하이', 2];
// tuples with 다차원 배열
const user = [
    ['김현빈', 30],
    ['김현빈', 30],
    ['김현빈', 30],
];
export {};
