//1
function createArray(start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}
//2
function printNumbers(a, b) {

	console.log(a);

	for (let i = a + 1; i <= b; i++) {

		for (let l = 1; l <= i - a; l++) {
			console.log(i);
		}
	}
}
printNumbers(3, 10);
//3
function randArray(k) {
	let arr = [];
	for (let i = 0; i < k; i++) {
		let numberRandom = Math.floor(Math.random() * 500) + 1;
		arr.push(numberRandom);
	}
	return arr;
}
console.log(randArray(15));
//4
function compact(arr) {
	arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if (!arrNew.includes(arr[i])) {
			arrNew.push(arr[i]);
		}

	}
	return arrNew;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);
//5
function funcName(arr4) {
	const arrNum = arr4.reduce((acc, curr) => {
		if (typeof curr === 'number') {
			return acc.concat(curr);
		}
		if (Array.isArray(curr)) {
			return acc.concat(funcName(curr)[0]);
		}
		return acc;
	}, []);
	const arrStr = arr4.reduce((acc, curr) => {
		if (typeof curr === 'string') {
			return acc.concat(curr);
		}
		if (Array.isArray(curr)) {
			return acc.concat(funcName(curr)[1])
		}
		return acc;
	}, []);

	return [arrNum, arrStr]


}
let arr4 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNewOne = funcName(arr4);
console.log(JSON.stringify(arrNewOne, null, 2));// Найшов такий метод з JSON бо в консоль виводило не те що в умові, це правильно?
//6
function calc(aa, bb, op) {
	if (op === 1) {
		return aa - bb;
	} else if (op === 2) {
		return aa * bb;
	} else if (op === 3) {
		return aa / bb;
	} else {
		return aa + bb;
	}
}
console.log(calc(10, 3, 1));
//7
function findUnique(arr) {
	const uniqueArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!uniqueArr.includes(arr[i])) {
			uniqueArr.push(arr[i]);
		} else {
			return false;
		}
	}
	return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true
