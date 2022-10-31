/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {}                                // we need to return an object
  for (let i = 0; i < string.length; i++) {   // normal FOR loop to iterate through the string
    if (obj[string[i]] === undefined) {       // if conditional that will check through an arr of the string
      obj[string[i]] = 1                      // if it is there it will return 1
    } else {                                  // if it finds more than just the one char 
      obj[string[i]]++                        // then it will count each time by 1 and return that num
    }
  }
  return obj
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
