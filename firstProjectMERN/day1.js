//variable declare, assign, reassign
var a = 20;
var a = 100;
let b = 30;
b = 50;
const str = "hello"
console.log(a,b,str);

//hoisting in variables (var)
console.log("Variable hoisting using var")
console.log("before hoist");
console.log(x)
var x = 50;
console.log("after hoist");
console.log(x);

//hoisting in variables (let)
// console.log("before hoist");
// console.log(z) //error
console.log("Variable hoisting using let")
let z = 50;
// console.log("after hoist");
console.log(z);

//hoisting in function
console.log("function hoisting")
A();

function A() {
    console.log("hoisted function A");
}

/*higher order function
==> function passed as an argument
==> return value is a function
*/
console.log("higher order function")
const greet = (string) => {
    return function(name){
        return string +" " + name;
    }
}

let name = "varshini"
let result = greet("Hello") (name);
console.log(result);

//function currying
console.log("Function currying")
const greetings = (string) => {
    return function(name1){
        return function(name2){
            return string + " " + name1 + " " + name2;
        }
    }
}

let name1 = "varsh"
let name2 = "udhaya"
//function currying
let res = greetings("hi") (name1) (name2);
console.log(res);

//indexing 
console.log("indexing")
let str1 = "Happy morning"
let letter = 'm'
var index = str1.indexOf(letter)
console.log("The letter present in the index", index);

//Manipulating an array
console.log("manipulation of arrays")
console.log("Methods \n 1)Push \n 2)Pop \n 3)Shift \n 4)Unshift")
console.log("\nPush")
let arr = [5,6]
console.log("original array", arr);
arr.push('11')
console.log("After pushing 11, the array is")
console.log(arr.join(" "))
console.log("Element added at the end")

console.log("\nPop")
let arr1 = [5,6,11]
console.log("original array", arr1);
arr1.pop()
console.log("After pop, the array is")
console.log(arr1.join(" "))
console.log("Element deleted at the end")

console.log("\nShift")
let arr2 = [5,6,11]
console.log("original array", arr2);
arr2.shift()
console.log("After shift, the array is")
console.log(arr2.join(" "))
console.log("Element deleted at the front")

console.log("\nUnshift")
let arr3 = [5,6,11]
console.log("original array", arr3);
arr3.unshift('100')
console.log("After unshift, the array is")
console.log(arr3.join(" "))
console.log("Element added at the front")

//splicing
console.log()
var array1 = [1,2,3,4,5,6,6,7,78,8]
console.log("original array")
console.log(array1)
var spliceArr = array1.splice(3, 5);
console.log("After splicing")
console.log(spliceArr)
console.log("after slicing the original array get modified");
console.log(array1)

//slicing
console.log()
var array2 = [1,2,3,4,5,6,7,8,9,11,10]
console.log("original array")
console.log(array2)
var sliceArray = array2.slice(3,7)
console.log("After slicing")
console.log(sliceArray)
console.log("after slicing the original array remains same");
console.log(array2)

console.log();
//reverse a string
console.log("Reverse a string")
const reverse = (string) => {
    return string.split("").reverse().join("");
}
let RevStr1 = "HelloWorld";
const revRes = reverse(RevStr1);
console.log("Original string", RevStr1);
console.log("Reversed string is", revRes)

//palindrome program
console.log()
console.log("Palindrome Program")
const palindrome = (string) => {    
    let paliStr2 = string.split("").reverse().join("");
    return paliStr1 == paliStr2;
}
let paliStr1 = "malayalam"
const palindromeRes = palindrome(paliStr1);
palindromeRes ? console.log("Palindrome string") : console.log("Not a Plaindrome"); 

//anagram program
console.log()
console.log("Anagram program")
const anagram = (string) => {    
    let paliStr2 = string.split("").reverse().join("");
    return paliStr1 == paliStr2;
}
let anaStr1 = "brush";
let anaStr2 = "shrub";
const anagramRes = anagram(paliStr1);
anagramRes ? console.log("Anagram string") : console.log("Not an anagram"); 

//first Letter to Uppercase
console.log()
console.log("First Letter to Uppercase in each word")
const titleCase = (str) => {
    // for(let i = 0; i<=str.length; i++){
    var str1 = str.split(" ")
    // console.log(str1)
    for(let i = 0; i<str1.length; i++){
        str1[i] = str1[i][0].toUpperCase() + str1[i].substr(1);
    }
    // }
    var final_str = str1.join(" ")
    return final_str
}
let wordStr = "hello varshini have you done your work"
const result1 = titleCase(wordStr)
console.log(wordStr)
console.log("Uppercase string")
console.log(result1)

//setTimeout, setInterval, clearInterval
console.log()
console.log("setTimeout, setInterval, clearInterval")
var callback = function(){
    console.log("setTimeout called")
    console.log("Done");
}

setTimeout(callback, 12000);
console.log("main, calling setInterval")
var n = 1;
let interval = setInterval(function (){
    console.log(n);
    n = n+1;
    if(n == 6){
        clearInterval(interval);
        console.log("setInterval terminated");
    }
},2000);

setTimeout(() => {
    console.log('1')
}, 3000);
console.log('2')


