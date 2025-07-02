/** any type */

// any 타입의 장점은 모든 들어올 수 있따.
// 단점은 모든 들어올 수 있다.
let obj: any = {
  name: '123',
};

obj = 1;
obj = 'string';
obj = { x: 1 };
obj = () => {};
obj.toUpperCase();
obj.toFixed();

/** unknown type */
// any와 차이점은
// 성의.. 거의 차이없다.

let arr: unknown;

arr = 1;
arr = 'hello';

/** 타입 좁히기 (narrowing) */
if (typeof arr === 'number') {
  arr.toFixed();
}
