'use strict';

let pets = ['cat', 'dog', 'rat'];

for (let i = 0, max = pets.length; i < max; i++) {
  pets[i] += 's';
}

console.log(pets);