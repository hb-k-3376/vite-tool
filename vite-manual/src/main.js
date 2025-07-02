import '@/style.css'; //vite는 css 파일을 import 해올수 있다. ( css 모듈화 가능 )
import { getNode, insertLast } from 'kind-tiger'; // npm에 올려 놓은 util 함수
import logo from '@/assets/js.svg'; // Vite에서는 정적 자산을 별도로 처리
import logo8b from '@/assets/8b.jpg';
import S from '@/style.module.css';

const app = getNode('#app');

const template = `
  <figure class="figure">
    <img src="${logo}" /> 
    <figcaption>자바스크립트 로고</figcaption>
  </figure>
  <figure class="${S.figure}">
    <img width="100" src="${logo8b}" /> 
    <figcaption>자바스크립트 로고</figcaption>
  </figure>
`;

insertLast(app, template);
