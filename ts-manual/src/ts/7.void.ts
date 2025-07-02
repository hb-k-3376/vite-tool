function sayHi(message: string): string {
  return 'hello';
}

// 아무것도 리턴하지 않는 함수는 void로 설정해여한다.
function printHi(): void {
  console.log('hello');
}

/* never type  */

// 존재하지 않는 / 불가능 한 타입 / 어떤 값도 정의할 수 없는 타입
// 절대 도달할 수 없고 절대 발생하지 않는 값을 never
function showError(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}

// 제너레이터 함수는 성능을 위해 사용한다 보통
function* gen(): Generator<number, void, void> {
  let count = 0;

  while (true) {
    yield ++count;
  }
}

/*
  1. 
*/
