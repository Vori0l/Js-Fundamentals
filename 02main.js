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
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
  let count = {};
  let compare = 0;
  let moreOfen = null;

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }

    if (count[arr[i]] > compare) {
      compare = count[arr[i]]
      moreOfen = arr[i];
    }

  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== moreOfen) {
      newArr.push(arr[i]);
    }
  }
  console.log(`Новий масив з числом ${moreOfen}`);
  console.log(`Даний масив: arr`);


  function calculateArea(f, g, h) {
	if (isNaN(f) || isNaN(g) || isNaN(h) || f <= 0 || g <= 0 || h <= 0) {
	  return 'Incorrect data';
	}
	let s = (f + g + h) / 2;
	let area = Math.sqrt(s * (s - f) * (s - g) * (s - h));
  
	area = Math.round(area * 1000) / 1000;
	return area;
  }
  
  let f = parseFloat(prompt("Введіть довжину першої сторони"));
  let g = parseFloat(prompt("Введіть довжину другої сторони"));
  let h = parseFloat(prompt("Введіть довжину третьої сторони"));
  
  let area = calculateArea(f, g, h);
  
  console.log(`площа: ${area}`);
  
  if (f * f + g * g === h * h || g * g + h * h === f * f || f * f + h * h === g * g) {
	console.log("Трикутник є прямокутним");
  } else {
	console.log("Трикутник не є прямокутним");
}
  
//6
const time = new Date().getHours();
if (time >= 23 ||  time < 5) {
  console.log("Доброї ночі");
} else if(time >= 5 && time < 11) {
  console.log("Доброго ранку");
} else if (time >= 11 && time < 17) {
  console.log("Доброго дня");
} else if (time >= 17 && time < 23) {
  console.log("Доброго вечора");
}

