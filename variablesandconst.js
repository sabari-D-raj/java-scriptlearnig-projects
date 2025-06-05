//to link this file to html file we need to add the script tag in the head or body of the html file like this
// <script src="variblesandconst.js"></script>
//varibales are used to store data it can be a number, string, boolean, array, object, etc.its value can be changed later
//we can declare variables using var
// let, or const var is fuction scoped and can be redeclared, let is block scoped and cannot be redeclared, const is block scoped and cannot be redeclared or reassigned
//const is used to declare a constant variable that cannot be reassigned
let x= 10;
var y = 20;
const z = 30; 
let name= "John";
let isActive = true;
console.log(x); // prints 10 in the console press F12 to see the console or right click and select inspect
console.log(y);
console.log(z);
console.log(name);
console.log(isActive);
//we can also declare variables without assigning a value
let a;//declaring
a=10;//assingment
console.log(a);
console.log(typeof a); // it show as what type of data it is like number, string, boolean, object, etc. in this case it will show number
//print in html first we need to get the element by id and then set its innerHTML property
/* <p id ="hai"></p>
document.getElementById("hai").innerHTML = "Hello World"; // this will print Hello World in the paragraph with id hai
//we can also use template literals to print variables in a string
try it yourself by changing the value of name and isActive
document.getElementById("hai").innerHTML = 'Hello ${name}' it will show hello john in the paragraph with id hai
by the way you can also use backticks(` `) single quatoe('') and double("") to create a template literal
*/ 
document.getElementById("hai").innerHTML = `Hello ${name} is active: ${isActive}`; // this will print Hello John is active: true in the paragraph with id hai

