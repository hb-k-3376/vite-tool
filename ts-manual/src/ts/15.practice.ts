import type { Pokemon } from './pokemon';

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';

// fetchData 함수를 만들고 타입을 지정해주세요.

const fetchData = async (url: string): Promise<Pokemon> => {
  const res = await fetch(url);
  return await res.json();
};

const data = await fetchData(END_POINT);

// createCard
const createCard = ({ sprites, name }: Pick<Pokemon, 'sprites' | 'name'>): string => {
  const tag = `
      <li>
        <div class="card">
          <img src="${sprites.front_default}" alt="${name}"/>
          <h2>${name}</h2>
        </div>
      </li>
    `;

  return tag;
};

// renderCard
const renderCard = (target: HTMLElement | null, data: Pokemon): void => {
  // if (target) {
  //   target.insertAdjacentHTML('beforeend', createCard(data));
  // }
  // target?.insertAdjacentHTML('beforeend', createCard(data));
  target && target.insertAdjacentHTML('beforeend', createCard(data));
};

function fetchPokemon() {
  const arr: Promise<Pokemon>[] = [];

  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(fetch(url).then((res) => res.json()));
    });

  return arr;
}

function createPokemonObject(arr: Promise<Pokemon>[]) {
  // 배열에 담긴 수많은 promise들을 순회 하면서 모든 promise들을 가디라고 전부 끝나면 배열에 담에 리턴
  let pokemon = Promise.all(arr).then((all) => {
    all.map((p) => ({
      name: p.name,
      image: p.sprites.front_default,
    }));
  });

  return pokemon;
}
