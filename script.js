// console.log("Hello World")

// // document.write("Hello world")

// var num = 5;
// console.log(typeof(num))

//Java Script Variables

/* all variables have 
Name
Type
value or "null"
to declare a variable
var variableName
let x = 10
x = 20     //Redeclaration is not allowed in let, But re-declaration is not allowed 
//re-declaration is allowed in var
*/

// var num = 10;
// console.log(num)
// console.log(typeof(num))
// num = false
// console.log(num)
// console.log(typeof(num))
// num = "Avinash Kushwaha"
// console.log(num)
// console.log(typeof(num))
// num = null
// console.log(num)
// console.log(typeof(num))
// num = undefined
// console.log(num)
// console.log(typeof(num))

/* 
Refrence(object) type -->
array
object
function
*/

var sayHello = function () {
  alert("Hello world");
};

//object
var numberArray = [1, 2, 3];
var animals = new Array("cat", "dog", "mouse", "lion");
//object

// var person = {
//     name:"Avinash Kushwaha",
//     age:18,
//     title:"Student of AIML"
// }

/* 
Symbol type: New Primitive data type introduced in ES6d


*/

// {/* <script type = "text/javascript"></script> */}
// const sym1 = Symbol(4)
// console.log(sym1)
// const sym2 = Symbol(4)
// console.log(sym2)
// if(sym1==sym2){
//     console.log("true")
// }
// else{
//     console.log("false") //Because Each symbol is different
// }

var a = 10;
var b = 13;
var c = 10;
// var linebreak = "<br>"
// document.write(a+b+c)
// result = a+b+c
// document.write(result)
// document.write(linebreak)

a = 10;
b = 20;
// document.write("(a<b>) => ")
// result = (a<b)
// document.write(result)
// document.write(linebreak)

// document.write("(a>b) => ")
// result = (a>b);
// document.write(result)

//Ternary Opeartor --> variablename = (condition)?value1:value2;

// var age = 21
// var voteable = (age<18) ? console.log("Too young"):console.log("Young enough");

// var count;
// document.write("Starting loop" + "<br/>")

// for(count =0; count<10; count++){
//     document.write("Current Count: "+count)
//     document.write("<br/>")
// }

// document.write("Loop Stopped!")

//for in loops

const person = {
  fname: "Avinash",
  lname: "Kushwaha",
  age: 19,
};

for (let x in person) {
  // console.log("Person details: "+x  +": "+person.x) //person.x will return an undefined value.
}

var age = 20;
if (age >= 18) {
  // console.log("<b>You are eligible to cast the vote.</b>") //Bold works in html file.
} else {
  // console.log("You are a minor.")
}

// var grade = 'A'
// switch(grade){
//     case 'A':
//         console.log("Good job")
//         break;
//     case 'B':
//         console.log("Pretty Good")
//         break;
//     case 'C':
//         console.log("Passed")
//         break
//     case 'D':
//         console.log("Not so good")
//         break;

//     default:
//         console.log("Wrong Input")
// }

// function doWhatever(){
//     //Code
// }

//Arrow functions -->
var add2 = (a, b) => {
  return console.log(a + b);  //Explicit return. Implicit return is done withoug using curley braces and without writing return on the same line.
} 
(add2(10,20))
