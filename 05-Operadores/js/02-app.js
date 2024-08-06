
const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(num1 == num3);  //false
console.log(num1 == num2);  //true
console.log(typeof(num1));  //number
console.log(typeof(num2));  //string

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);    //true
console.log(num1 != num2);  //false
console.log(num1 !== parseInt(password1)); //evalúa tipo de dato    //true
console.log(num1 === num2);  //false