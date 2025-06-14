//stringmethods allow you to manipulate and work on text(string)
let userName="Sabari Raj RS";
//we can asses each letter in the username with .charAt(index-number)
userName.charAt(0) // the dot means we are accesing string properties 
console.log(userName.charAt(0));// it will show the letter at index 0 it will be "S"
//to check the length of the string
console.log(userName.length);//output will be the length of the string this case 10
//to remove the white space of the string you can use trim()
console.log(userName.trim());//it will trim out the white space output will be "sabariRajRS"
//to CAPITALIZE the letter of the string you can use .toUppercase
userName=userName.toUpperCase();
console.log(userName);//output will be SABARIRAJRS
//to lowercase
userName=userName.toLowerCase();
console.log(userName);//the output will be sabari raj rs
//to repeat the string .repeat(how many times you want to repeat)
userName=userName.repeat(5)
console.log(userName)//it will repeat userName for 5 times
//to check your username included something use .include(what you include)
let result= userName.includes()
// if you want replace some letter or something use .replace(which you want to repalce ,what you want in the place)
result= userName.replace("a","X") 
console.log(result)//output will be sXbXri RXj RS
//if you want to slice the string use string slice(index from , index to)
firstName =userName.slice(0,6)
console.log(firstName) //output will be Sabari
// there is many more try to find it your self :)