// 타입스크립트의 꽃 제네릭!!!

/** generics type */

// T, U 매개변수
type User<T, U> = {
  name: T;
  age: U;
};
// T, U  를 파리미터로 사용
const user: User<string, number> = {
  name: 'tiger',
  age: 30,
};

// 함수는 유연하게 파라미터를 받고 리턴해야지 재사용성이 올라가는데
// 타입스크립트에서는 일반적은 셋팅으로는 설정하기 힘들다
// 그래서 사용하는 방법이 제네닉
// 함수 명 옆에 제네릭으로 타입 파라미터를 받고 해당 타입 파라미터를
// 함수 파라미터의 타입으로 정의
function fn<T>(value: T): T {
  return value;
}

fn<number>(10);
fn<string>('hello');

/*
  T = Type
  U = Util
  K = Key
  V = Value
  R = return Type
  E = Element / Error
  S = State
*/

// const arr: Array<number> = [1, 2, 3];

// 유연하게 사용 가능하다.. 정말 유용하다
function swapAToB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAToB<number, string>(0, 'a');
swapAToB<[], string>([], 'a');

// 단순히 이렇게 설정하면 제네릭에 뭐가 들어올지 알고 length를 쓰는가?
// T가 length를 가지지 않는 파라미터가 무조건 들어온다고 확신하는가? 라고 에러는 냄
// function getLength<T>(arr: T): number {
//   return arr.length;
// }

// 확장 제네릭을 받을 건데 그 대상이 length를 가지고 있을 것이다.
// 상속이라는 다르게 말 그대로 확장을 시키는거다 : 세부 조건을 넣으려면 extends를 추가하자
function getLength<T extends { length: number }>(arr: T): number {
  return arr.length;
}

getLength<Array<number>>([1, 2, 3, 4, 5]);
getLength<Array<string>>(['a', 'b', 'c']);
getLength<string>('hello');
getLength<{ length: number }>({ length: 10 }); // 이 가능한 이유는 객체에 직접 length를 넣으면 length가 있는 거니까..

// extends 다른 예시
// 조건문도 사용할 수 있다...
// T가 string 이면 or Not
type Response<T> = T extends string ? { type: string; content: string } : { type: string; content: T };

const r1: Response<string> = { type: 'text', content: 'hello' };
const r2: Response<{ name: string }> = { type: 'json', content: { name: 'tiger' } };
// 에러는 안나지만 쓰는 의미가 없다 어떤 객체가 들어와도 에러가 안나기 떄문
// const r2: Response<object> = { type: 'json', content: { name: 'tiger' } };

// 예제 1
function getById<T extends { id: number }>(item: T): number {
  return item.id;
}

getById({ id: 10, title: '아이폰', sub: 'asdf' });
getById({ id: 20, title: '갤럭시' });
// getById({ title: '갤럭시' });
