// 문제 : un 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 타입 좁히기를 (narrowing) 사용하여 만들어주세요

let un: unknown;

if (typeof un === 'number') un.toFixed(2);
if (typeof un === 'string') un.toUpperCase();
if (un instanceof Date) un.getTime();
if (un instanceof Element) un.nextElementSibling;

// 객체의 상속 여부? 를 판단하는 연산자로
// 타입스크립트에서 잘 사용 된다.
