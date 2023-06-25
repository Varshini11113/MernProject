//DAY 2 MERN intern



let arr = [11,2,30]
for(var ele of arr){
    if(ele % 2){
        console.log("Odd element", ele)
    }
    else{
        console.log("Even element", ele)
    }
}

//Delete keyword
let ar = [1,2,3,4,5,6]
ar.push("varshini")
console.log(ar)
console.log(typeof(ar[6]))

//delete
let arr5 = [1,2,3,4,5,6]
arr5.splice(2,1)
console.log(arr)

//using array object
let ar1 = new Array(5)
ar1.push(1)
ar1[0] = 11
ar1.unshift(5)
console.log(ar1)
console.log(ar1.length)

//for each
const array1 = ['a', 'b', 'c']
array1.forEach(ele => console.log(ele));

//another way

//function
let ar_1 = [1,2,3,4]
ar_1.forEach((ele) => {
    console.log(ele * 2)
    });

const multiply = (arr, num) => {
    const new_arr = arr.map((el) => el*2)
    return new_arr
}
const res = multiply([1,2,3], 2)
console.log(res)

//odd or even
const oddEven = (arr) => {
    const new_arr = arr.map((el) => (el&1) ? 'odd' : 'even')
    // arr.forEach((ele) => {
    //     (ele & 1) ? new_arr.push('odd') : new_arr.push('even')
    // })
    return new_arr
    
}
const res1 = oddEven([1,2,3])
console.log(res1)

const filterEven = (array) => array.filter((el) => el%2 === 0)
const result = filterEven([1,2,3,4,5,6])
console.log(result)

const nums = [32, 33, 16, 40];
const result1 = nums.filter(checkEven);

function checkEven(num) {
  return num % 2;
}

const array_1 = [1,2,3]
const array_2 = [...array_1]
console.log(array_2 === array_1)//return false
array_2[0] = 10//memory is not same for both arr2 and arr1
console.log(array_2)// 10 2 3
console.log(array_2 === array_1) //return false
console.log(array_1)// 1 2 3

const arr_1 = [1,2,3]
const arr_2 = [4,5,6]
const arr_3 = [...arr_2, ...arr_1]
console.log(arr_3)

//destructuring using spread operator.
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const [a,b,...rest] = arr1 //rest of the elements are stored in rest.
console.log(a)
console.log(b)
console.log(rest)
// console.log(c)



// Objects in js
var emptyObject = {}
var personObject = {
    firstName : "varshini",
    lastName : "varsh"
}
//adding elements
//two ways - (.)dot operator, array brackets
personObject.age = 18;
personObject['salaray'] = '44LPA'
console.log(personObject)

//obejcts inside objects
const student = {
    name : "varsh",
    cls : 'X',
    marks : {
        eng : 95,
        math : 97,
        science : 100
    }
}
const sub = "math"
console.log(student.marks[sub]) //if the object name is not known exactly
console.log(student.marks.math) //if element is exactly known

const printMarks = (obj, sub) => {
    return `${obj.name}'s ${sub} mark is ${obj.marks[sub]}`
}
console.log(printMarks(student, "science"))

//creating objects
const college = {
    name : "sri eshwar",
    location : "cbe",
    dept : {
        ece : 130,
        cse : 180,
        It : 60,
    }
}
const dept1 = "ece"
const dept2 = "cse"
const dept3 = "It"
console.log(college.name, college.location)
