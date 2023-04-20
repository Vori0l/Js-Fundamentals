//1
let a = 1;
let b = 5;
let c = 3;

if (a < b && b < c) {
	console.log("Висловлення a < b < c є істине");
} else {
	console.log("Висловлення a < b < c не є істиним");
}

//2
let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""
x = true;
y = 2;
let res2 = true && x.toString() + y.toString();// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""
x = "js"
y = 5;
let res4 = y / x;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3
let isAdult = prompt("Скільки вам років?")
if (isAdult >= 18) {
	alert("Ви досягли повнолітнього віку")
} else {
	alert("Ви ще молоді")
}
console.log(isAdult);
//4
