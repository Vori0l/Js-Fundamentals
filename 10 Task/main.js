///------1------///
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5"  } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

///------2------///
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {
	names: [, name2, , name4],
	ages: [ , age2, , age4]
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

///------3------///

// 3.
// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.

function mul() {
	let product = 1;
	let hasNumbers = false
  for (let i = 0; i < arguments.length; i++) {
	const argument = arguments[i];

	  if (typeof argument === 'number') {
		  product *= argument
		  hasNumbers = true;
	  }
  }	
  if (!hasNumbers) {
    return 0;
  }
	return product;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

