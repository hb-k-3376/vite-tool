// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.

import { type Person } from './type';

interface IProduct {
  id: string | number;
  name: 'Laptop' | 'Smartphone';
  price: number;
}

const product1: IProduct = {
  id: 'abc123',
  name: 'Laptop',
  price: 1000,
};

const product2: IProduct = {
  id: 123456,
  name: 'Smartphone',
  price: 500,
};

// 문제: Contact타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.
type Contact = {
  email: string;
  phone: string;
};

type Employee = Person & Contact;

const employee1: Employee = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  phone: '123-456-7890',
};
