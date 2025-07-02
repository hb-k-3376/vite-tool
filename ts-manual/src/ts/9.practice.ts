// 문제: 다양한 타입들이 동작할 수 있는 narrowing을 작성해주세요

function processInput(input: string | number | string[] | Error): void {
  if (typeof input === 'string') console.log(input.toUpperCase());
  else if (typeof input === 'number') console.log(input ** 2);
  else if (input instanceof Array) console.log(input.length);
  else if ('message' in input) console.log(input.message);

  if (input instanceof Error) {
    console.log(input.message);
  }
}
