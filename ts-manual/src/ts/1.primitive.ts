// number ,string. boolean. null. undefined;

// 타입스크립트는 기본적으로 타입을 추론한다.
// 하지만 가독성을 위해 직접 타입을 정의 해주는 것이 좋다
let num1: number = 10;
let num2: number = NaN;
let num3: number = -123;
let num4: number = 1.231;
let num5: number = Infinity;

// string type
let str1: string = 'hi';
let str2: string = 'hello';
let str3: string = `hola`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null type
let nullA: null = null;

// undefined
let undef: undefined = undefined;

// literal type
let numA: 10 = 10;
let strA: 'hello' = 'hello';
let boolA: true = true;

// unknown type
// 현재는 어떤 타입인지는 모르지만 나중에 처리하겠다.
let unknown: unknown;

// never type
// 아무것도 할당 할 수 없는 타입
// 콘솔을 찍는 함수나 단순하게 에러를 내는 함수
let never: never;

// any type
let any: any;

// 실습
