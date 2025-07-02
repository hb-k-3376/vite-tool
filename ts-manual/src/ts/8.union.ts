/** Union type 힙집합 타입 */

// 리터럴 타입들을 파이프라인으로 연결
// 여러가지 타입을 받을 수 있지만 정해진 리터럴만
let str: 'name' | 'age' | 'address' = 'name';

type CompanyA = {
  companyName: string;
  since: number;
  ceo: 'tiger' | '현빈';
};

// &로 추가하면  require 값이고 | 로 추가하면 optional 값이다.
const company1: CompanyA | { ceo: '민수' } = {
  companyName: '8b-studio',
  since: 2022,
  ceo: 'tiger',
};

company1.ceo = '현빈';
