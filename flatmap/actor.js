 const foods = [
  {
    category: 'coffee',
    options: [
      { text: 'coffee1', selected: false },
      { text: 'coffee2', selected: true },
    ]
  },
  {
    category: 'bread',
    options: [
      { text: 'bread1', selected: false },
      { text: 'bread2', selected: false },
      { text: 'bread3', selected: false },
      { text: 'bread4', selected: false },
      { text: 'bread5', selected: true },
    ]
  },
  {
    category: 'cookie',
    options: [
      { text:'cookie1', selected: false },
      { text:'cookie2', selected: false },
      { text:'cookie3', selected: false },
      { text:'cookie4', selected: false },
      { text:'cookie5', selected: false },
      { text:'cookie6', selected: false },
      { text:'cookie7', selected: false },
      { text:'cookie8', selected: true },
    ]
  },
  {
    category: 'water',
    options: [
      { text: 'water1', selected: false },
      { text: 'water2', selected: false },
      { text: 'water3', selected: false },
      { text: 'water4', selected: false },
      { text: 'water5', selected: false },
      { text: 'water6', selected: false },
      { text: 'water7', selected: false },
      { text: 'water8', selected: false },
      { text: 'water9', selected: true }
    ]
  },
  {
    category: 'sweets',
    options: [
      { text: 'sweets1', selected: false },
      { text: 'sweets2', selected: true }
    ]
  },
];

console.log(foods.slice(2));
console.log(foods.slice(2).flatMap(filter => filter.options));
console.log(foods.slice(2).flatMap(filter => filter.options).filter(option => option.selected));
console.log(foods.slice(2).flatMap(filter => filter.options).filter(option => option.selected).map(option => option.text));

