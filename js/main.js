//Fetch Json
const loadItems = () => {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
};

//Update list
const displayItems = (items) => {
  const container = document.querySelector('.items');
  // const html = items.map(item => createHtmlString(item));
  // console.log(html);
  container.innerHTML = items.map(item => createHtmlString(item)).join('');
}

//Create Html list
const createHtmlString = (item) => {
  const {image, type, gender, size} = item;
  return `
    <li class="item">
      <img src="${image}" alt="${type}" class="item__thumbnail">
      <span class="item__description">${gender} , ${size}</span>
    </li>
  `;
}

//버튼이 클릭되었을때 동작하는 함수
const onButtonClick = (e , items) => {
  const dataset = e.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  // console.log(key)
  // console.log(value)
  // null checking
  if (key === undefined || value === undefined) {
    return;
  }

  // console.log(items)
  const filtered = items.filter(item => item[key] === value);
  // console.log(filtered);
  displayItems(filtered);
}

//addEventListener함수
const setEventListeners = (items) => {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click',(e) => onButtonClick(e , items));
};

//main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
