const items = [
  { title: "Batman #1", price: 30, owned: true },
  { title: "Spawn #1", price: 12, owned: false },
  { title: "X-Men #1", price: 45, owned: false },
  { title: "Saga #1", price: 8, owned: true },
];

// const titles = items.map(item => item.title);

// console.log(titles);

// const owned = items.filter(item => item.owned == true);

// console.log(owned);

// const mostExpensive = items.find(item => item.price > 40);

// console.log(mostExpensive);

// const sum = items.reduce((acc, item) => acc + item.price, 0)

// console.log(sum);

// const sumNotOwned = items.filter(item => item.owned == false).reduce((acc, item) => acc + item.price, 0)

// console.log(sumNotOwned)

const notOwnedCheap = items.filter(item => !item.owned && item.price < 40)

console.log(notOwnedCheap);

const numberOwned = items.filter(item => item.owned).length

console.log(numberOwned);

const ifOneCheap = items.some(item => item.price < 10);

console.log(ifOneCheap)