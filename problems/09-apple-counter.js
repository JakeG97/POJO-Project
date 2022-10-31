/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  let count = 0                         // we need a number returned as counter so = 0
  let keyArray = Object.keys(appleObj)  // we need to check through the arrs of keys so we create a var to do so 'keyArray' using the 'Object.keys' method

  for (let i = 0; i < keyArray.length; i++) {           // then a normal for loop to iterate through that arr
    if (keyArray[i].toLowerCase().includes('apple')) {  // if conditional that changes everything to lowercase to see if it includes 'apple'
      count++                                           // if it does contain that then it will count that and add 1 each time that it finds more
    }
  }
  return count
}

function appleAndOranges(obj) {
  let count = 0;
  let keyArr = Object.keys(obj);
  let valArr = Object.values(obj);

  for (let i = 0; i < keyArr.length + valArr.length; i++) {
    if (keyArr[i].includes('apple' || 'orange')) {
      count ++
    } else if (valArr[i].includes('apple' || 'orange')) {
      count ++;
    }
  }
    return count
}

let obj1 = { banana: "yay!" };
console.log(appleCounter(obj1)); // => 0

let obj2 = { crabapple: "yum!" };
console.log(appleCounter(obj2)); // => 1

let obj3 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
console.log(appleCounter(obj3)); // => 2


let obj4 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
console.log(appleCounter(obj4)); // => 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
