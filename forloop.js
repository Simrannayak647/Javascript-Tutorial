//for of is used to iterate over values of an array 
const values =["Hello","12",34,"book"];

for(const fruit of values){
     console.log(fruit);
}
//for in values
const person = { name: 'John', age: 30, occupation: 'Developer' };

for (const key in person) {
  console.log(key + ': ' + person[key]);
}
//for each --forEach can be used to perform simple operations on each item in an array.
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flattened = [];

arrays.forEach(subArray => {
  subArray.forEach(element => {
    flattened.push(element);
  });
});

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]