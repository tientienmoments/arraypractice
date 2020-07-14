let name =["bitna","jeesun","dung","tien","nguyen"]
// for (let i=0;i< name.lenght; i++){
//   name[i] += "kim";
//   console.log(name[i])
// }

let fruit = ["mango", "banana", "pineapple", "strawberry"]
// function findFruit(fruit){
//   console.log("what we have this turn", fruit)
//   // return fruit === "amngo"
//   return false
// }


// let output = fruit.filter(findFruit)     old syntax
// console.log (output)

//1-- filter : new syntax
const findFruit = (fruit) => { return fruit === "mango" }

let output = fruit.filter(findFruit)
console.log('output:', output)

///anonous
// let output = fruit.filter((fruit) => fruit.toLowerCase() === "mango")
// console.log (output)


let number = [3, 4, 1, 8, 0, 9]

// const findNumber = (number) => {number.value >=5}
// let numberOuput = number.filter(findNumber)
// console.log(numberOuput)

let sortedArray = number.sort((a, b) => {
  if (a < b) {
    return 1   //so duong => tu 37 lon xuong 39 be 
  } else if (a > b) {
    return -1
  } else {
    return 0
  }
})
console.log(sortedArray)
// let numberOutput =number.filter ((number)=> number >=5)
// console.log (numberOutput)
//how to "2 every single number in array"


//2 --- mapp: input is array => output is array... output will be all the element of array

// let name =["bitna","jeesun","dung","tien","nguyen"]
// for (let i=0;i< name.lenght; i++){
//   name[i]+= "kim"
//   console.log(name[i])
// }

// let nameOutput= name.map((item)=>item +" kim")
// console.log(nameOutput)

// let nameOutput = name.map((item,index)=> {
//   let arryName = item.split('')
//   console.log("array",arrayName)
//   array
// })
// console.log (nameOutput)
//sap xep so theo diem va thoi gian
let score = [[100, 8], [20, 5], [100, 5]]

let sortArray = score.sort((a, b) => {
  if (a[0] < b[0]) {
    return 1
  } else if (a[0] > b[0]) {
    return -1
  } else {
    if (a[1] < b[1]) {
      return -1
    } else if (a[1] > b[1]) {
      return 1
    } else {
      return 0
    }
  }

})
console.log(sortArray)

//----- REDUCE 
//how can u sum all these number in let number
let total=0
// for (let i =0;i<number.length;i++){

// }
let sum =number.reduce((total,item)=>{
  return total += (item*2)
},0)
console.log(sum)

// let nameReduce= name.reduce((total,item)=>{
//   return total+=itme
// })
// console.log(nameReduce)

//----some 
// let result = fruit.some(item => item === "apple")
// console.log(result)

// //-- FIND
// let resultFruit= fruit.filter(item => item.includes)

// //-FINDINDEX