/*in java script there are operators like arithmatic operator , assingment operator,bitwise operator,logical operators */
// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Addition  //output: 15
let difference = a - b; // Subtraction output: 5
let product = a * b; // Multiplication //output: 50
let quotient = a / b; // Division   //output: 2
let remainder = a % b; // Modulus  it returns the remainder of the division //output: 0
let exponent = a ** b; // Exponentiation  it raises the first operand to the power of the second operand 10right to 5 //output: 100000
// Increment and Decrement Operators
let increment = a++; // Post-increment  it increases the value of a by 1 after the current expression is evaluated //output: 11
let decrement = b--; // Post-decrement  it decreases the value of b by 1 after the current expression is evaluated //output: 4
/* Assingment operators are used to assing values to javascript variables */
let c = 20; // Assignment
c += 5; // Addition assignment  it adds 5 to c and assigns the result to c //output: 25 
c -= 3; // Subtraction assignment  it subtracts 3 from c and assigns the result to c //output: 22
c *= 2; // Multiplication assignment  it multiplies c by 2 and assigns the result to c //output: 44 
c /= 4; // Division assignment  it divides c by 4 and assigns the result to c //output: 11
c %= 3; // Modulus assignment  it takes the modulus of c by 3 and assigns the result to c //output: 2
c **= 3; // Exponentiation assignment  it raises c to the power of 3 and assigns the result to c 
//logical operators are used to perform logical operations on boolean values
let x = true;
let y = false;
let andOperation = x && y; // Logical AND  it returns true if both operands are true, otherwise false //output: false if both x and y are true then it will return true otherwise false
let orOperation = x || y; // Logical OR  it returns true if at least one operand is true, otherwise false //output: true if either x or y is true then it will return true otherwise false
let notOperation = !x; // Logical NOT  it returns true if the operand is false, otherwise false //output: false if x is true then it will return false otherwise true
// Bitwise Operators
let bitwiseAnd = a & b; // Bitwise AND  it performs a bitwise AND operation on the binary representations of the operands //output: 0
let bitwiseOr = a | b; // Bitwise OR  it performs a bitwise OR operation on the binary representations of the operands //output: 15
let bitwiseXor = a ^ b; // Bitwise XOR  it performs a bitwise XOR operation on the binary representations of the operands //output: 15
let bitwiseNot = ~a; // Bitwise NOT  it inverts the bits of the operand //output: -11
let leftShift = a << 2; // Left Shift  it shifts the bits of the operand to the left by the specified number of positions //output: 40
let rightShift = a >> 2; // Right Shift  it shifts the bits of the operand to the right by the specified number of positions //output: 2
let unsignedRightShift = a >>> 2; // Unsigned Right Shift  it shifts the bits of the operand to the right by the specified number of positions, filling in zeros from the left //output: 2
// Ternary Ooperators i wll cover in the next file commit