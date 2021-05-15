import { inventors, people, list, data } from './data.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500 = inventors.filter(({ year }) => year >= 1500 && year <= 1599);
console.log('bornIn1500', bornIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsNames = inventors.map(({ first, last }) => `${first} ${last}`);
console.log('inventorsNames', inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedBirthDays = inventors.sort((a, b) => a.year - b.year);
console.log('sortedBirthDays', sortedBirthDays);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumYears = inventors.reduce((total, { passed, year }) => total + (passed - year), 0);
console.log('sumYears', sumYears);

// 5. Sort the inventors by years lived
const sortedByYears = inventors.sort((a, b) => {
  const yearsA = a.passed - a.year;
  const yearsB = b.passed - b.years;
  return yearsA - yearsB;
});
console.log('sortedByYears', sortedByYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

list.filter(name => name.includes('de'));
console.log('list', list);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastName = people.sort((a, b) => {
  const [lastA] = a.split(', ');
  const [lastB] = b.split(', ');
  return lastA === lastB ? 0 : lastA < lastB ? -1 : 1;
});
console.log('sortedByLastName', sortedByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these

const sum = data.reduce((instances, item) => {
  if (!instances[item]) {
    instances[item] = 1;
  }
  instances[item]++;
  return instances;
}, {});
console.log('sum', sum);
