console.log("Semenyshyn")
let x = 10;
let str = "Hello everyone"
alert(x);
alert(str);
let y = x;
let newStr = str;
alert(y);
alert(newStr);

let myObject = {
	mysting: "Hello",
	myNumber: 66,
	myBoolean: true,
	myUndefined: undefined,
	myNull: null
};

const adult = confirm("Вам є 18 років?");
console.log(adult);

const firstName = "Pavlo";
const lastName = "Semeneyshyn";
const group = " js fundamentals";
let birthYear = 2005;
let isMarried = false;

console.log(typeof birthYear);
console.log(typeof isMarried);
console.log(typeof firstName);

console.log(birthYear);
console.log(isMarried);
console.log(firstName + " " + lastName + " (" + group + ")");

let b = 5;
let c = undefined;
console.log(typeof b);
console.log(typeof c);

let login = prompt("Введіть логін");
let email = prompt("Введіть емейл");
let password = prompt("Введіть пароль");

let message = `Dear user your login is ${login} , your email is ${email} , your password is ${password}`;

alert(message);


const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

alert(`Секунд у годині: ${secondsInHour}`);
alert(`Секунд  у дні: ${secondsInDay}`);
alert(`Секунд у місяці ${secondsInMonth}`); 
