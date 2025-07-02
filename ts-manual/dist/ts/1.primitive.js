// number ,string. boolean. null. undefined;
// 타입스크립트는 기본적으로 타입을 추론한다.
// 하지만 가독성을 위해 직접 타입을 정의 해주는 것이 좋다
let num1 = 10;
let num2 = NaN;
let num3 = -123;
let num4 = 1.231;
let num5 = Infinity;
// string type
let str1 = 'hi';
let str2 = 'hello';
let str3 = `hola`;
// boolean
let bool1 = true;
let bool2 = false;
// null type
let nullA = null;
// undefined
let undef = undefined;
// literal type
let numA = 10;
let strA = 'hello';
let boolA = true;
// unknown type
// 현재는 어떤 타입인지는 모르지만 나중에 처리하겠다.
let unknown;
// never type
// 아무것도 할당 할 수 없는 타입
// 콘솔을 찍는 함수나 단순하게 에러를 내는 함수
let never;
// any type
let any;
export {};
// 실습
