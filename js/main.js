//Fetch Json
const loadItems = () => {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
};

//Update list
const displayItems = (items) => {
  const container = document.querySelector('.items');
  const html = items.map(item => createHtmlString(item));
  console.log(html);
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

const SetEventListeners = () => {

};

loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
