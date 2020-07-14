const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// Print out an array of the inventors whose name starts with 'A'.

const startA = inventors.filter((inventors) => inventors.startsWith("A"));

console.log(startA);

// Print out an array of the inventors whose name contains 'n'.

const containN = inventors.filter((name) => { return name.includes('n')})

console.log('contain n:',containN)
// console.log(containN);

// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
// let output = inventors.filter((item, index) => {
//   let letters = item.split('')
//   let result = letters.filter((char, index) => {
//     return letters[index] === letters[index+1]
//   })
//   return result.length >= 1
// })


// console.log("the name have same letters:",output)

// ----
let doubleLetter =inventors.filter(name=> {
  let splitName=name.split('')
  let result = false
  for (let i =0; i <splitName.length; i ++){
    if (splitName [i]=== splitName[i+1]){
      result = true
    }
  }
  return result
})

console.log("2 letter:",doubleLetter)



// Print out an array of the numbers which are odd.

var odd = numbers.filter(x => x % 2 === 1);
console.log("odd number:",odd)
// Print out an array of the numbers that have two digits.
let numberDigits=numbers.filter(x => x>=10)
console.log(numberDigits)

// Print out an array of the numbers which are prime.
let numPrime = numbers.filter((numbers) => {
  for (var i = 2; i <= Math.sqrt(numbers); i++) {
    if (numbers % i === 0) return false;
  }
  return true;
});

console.log("prime number:",numPrime);

//   Print out the first name of each inventor------------------------------------------------------------
// let firstName =inventors.map(name=>{
//   let word= name.split ('',0)
// })
// console.log(word)

// Print out the length of every inventor's full name.------------------------------------------------------------
// let printOut = inventors.map(name => name.length)
// console.log ("print out:",printOut)
// Print out all the inventors' names in uppercase.

var uppers = inventors.map(function(x) { return x.toUpperCase(); });
console.log("change to upper case:",uppers);
// Print out initials of all inventors(e.g. A.E., I.N., ...)------------------------------------------------------------
// let initialLetter = inventors.map(name => {       //co the su dung array map o day
//   let inventorSplit = name.split(' ')
//   let result=''
//   for (let i=0; i <inventorSplit.length;i++ ){
//    result = inventorsSplit [0][0] +"."
// } return result
// })
let initialLetter = inventors.map(name => {       //co the su dung array map o day
    let inventorSplit = name.split(' ')
    let result =inventors.map(char => char.charAt(0)).join('.')
    return result
  })
  console.log (initialLetter)

// Print out an array of every number multiplicleared by 100.
let newValues = numbers.map((v) => {
  return v*100 ; 
}); 

console.log("multi 100 times:",newValues);

// Sort all the inventors in alphabetical order, A-Z.
var sortedByNameAZ = inventors.sort(function (a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
});
console.log("Sort inventors names from A-Z:",sortedByNameAZ);

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
var sortedByNameZA = inventors.sort(function (a, b) {
  if (a < b) return 1;
  else if (a > b) return -1;
  return 0;
});
console.log("Sort inventors names from Z-A:",sortedByNameZA);
// Sort all the inventors by length of name, shortest name first.

let sortInShortLenght= inventors.sort((a, b) => a.length - b.length);

console.log(JSON.stringify(sortInShortLenght, null, '\t'));
// Sort all the inventors by length of name, longest name first. Do not use the reverse method.
let sortInLongLenght= inventors.sort((a, b) => b.length - a.length);

console.log(JSON.stringify(sortInLongLenght, null, '\t'));
// Find the sum of all the numbers.
let sum =numbers.reduce((total,item)=>{
  return total +=item
},0)
console.log("sum all number",sum)
// Find the sum of all the even numbers.

var even = numbers.filter(x => x % 2 === 0);
let sumEven=even.reduce((total,item)=>{
  return total +=item
},0)
console.log("sume even number:",sumEven)

// Create a string that has the first name of every inventor.------------------------------------------------------------
let firstNa = inventors.reduce((total,name)=>{
total += name.split(' ')[0]
return total
},'')
console.log ("first name:",firstNa)
// Does any inventor have the letter 'y' in their name?
let checkY = inventors.some(chr => chr === "y")
console.log("Does any inventor have the letter 'y' in their name?",checkY)
// Does every inventor have the letter 'e' in their name?
let checkE= inventors.every(chr => chr === "e")
console.log("Does every inventor have the letter 'e' in their name?",checkE)
// Does every inventor have first name that's longer than 4 characters?------------------------------------------------------------
let check = inventors.every(name => name.split(' ')[0].length>4)
console.log ("check4 letter:",check)
// Find the inventor that has a middle name.------------------------------------------------------------
let haveMidName = inventors.every(name =>name.split('').length >=3)
console.log("midd name:",haveMidName)
// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

// Find the number divisible by 7.
let numberDivSeven = numbers.find(x => x%7===0)
console.log (numberDivSeven)

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.
let numberNotDivSeven = numbers.filter(x => x%7 !==0)
console.log (numberNotDivSeven)