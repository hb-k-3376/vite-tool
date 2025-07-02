/** enumerable type 열거 가능한 */
// 정말 안전한 상수를 가지고 오고 싶을때 사용하면된다
// ex ) end_point
// enum은 실제 자바스크립트를 생성한다.
enum Direction {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
}

const direction = {
  up: Direction.UP,
  down: Direction.DOWN,
  left: Direction.LEFT,
  right: Direction.RIGHT,
};
