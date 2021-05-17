const END_POINT =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchResults = [];
const defaultList = ['Filter for a city', 'or a state'];
const [list] = document.getElementsByTagName('ul');

const getData = async () => {
  console.log('loading...');
  const data = await fetch(END_POINT).then(response => response.json());
  cities.length = 0;
  cities.push(...data.map(({ city, state }) => ({ city, state })));
  console.log('done loading');
};

const renderList = () => {
  list.innerHTML = '';
  !searchResults.length
    ? defaultList.forEach(text => {
        const item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
      })
    : searchResults.forEach(({ city }) => {
        const item = document.createElement('li');
        item.textContent = city;
        list.appendChild(item);
      });
};

const onInputChange = e => {
  const input = e.target.value.toLowerCase();
  const results = !input
    ? []
    : cities.filter(({ city, state }) => city.toLowerCase().includes(input) || state.toLowerCase().includes(input));
  searchResults.length = 0;
  searchResults.push(...results);
  renderList();
};

const [inputField] = document.getElementsByTagName('input');
inputField.addEventListener('input', onInputChange);

getData();
