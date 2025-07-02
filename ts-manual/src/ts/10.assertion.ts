// assertion 주장
// html은 Element > HTMLElement > HTMLInputElement.....

// !만 붙이면? null 제거 <>
// 정확한 타입을 주장 하려면 ? as type

// 타입 단언은 위험하다.
// const input = document.querySelector<HTMLInputElement>('#textField')!;
// const input = document.querySelector('#textField') as HTMLInputElement;

// 안전하게 조건 처리를 하면 된다. <- 우리가 지향해야할 코드 스타일
const input = document.querySelector<HTMLInputElement>('#textField');

if (input) {
  input.value;
}

// readonly는 타입을지정하지만 수정은 못함
const personA: { readonly name: string; readonly age: number } = {
  name: 'tiger',
  age: 30,
};

// person.name = '현빈'

// 무조건 상수로 변경 불가능하게 단언 as const
// as const 는 타입을 지정한 것이 아니라 리터럴로 더 확실히 값을 고정
const personB = {
  name: 'tiger',
  age: 30,
} as const;

// person.name = 10;
