//1
function sumSliceArray(arr, first, second) {
	if (typeof arr !== "object" || typeof first !== "number" || typeof second !== "number") {
		throw new Error("Incorrect data entered, data must be numbers")
	}
	if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
		throw new Error("Incorrect data entered")
	}
	return arr.slice(first, second + 1).reduce((acc, curr) => acc + curr, 0);
}
const arr = [1, 2, 3, 4, 5, 6];
try {
	const sum = sumSliceArray(arr, 12, 20);
	console.log(sum);
} catch (error) {
	console.error(error.massage);
}
//2
function checkAge() {
	try {
		let name = prompt("Enter your name");
		let age = prompt("Enter your age");
		let status = prompt("Enter your status (admin, moderator, user)");

		if (isNaN(age)) {
			throw new TypeError("Age must be a number");
		} else if (age < 18 || age > 70) {
			throw new RangeError("Age must be between  18 and 70")
		} else if (!name || !age || !status) {
			throw new Error("The field is empty!");
		} else if (status !== "admin" && status !== "moderator" && status !== "user") {
			throw new EvalError("Stutus must be (admin, moderator, user)");
		} else {
			alert(`Welcome to the movie page , ${name}!`);
		}
	}
	catch (error) {
		alert(error.message);
	}
}

checkAge();
//3
function calcRectangleArea(width, height) {
	if (typeof width !== 'number' || typeof height !== 'number') {
		throw new Error('Параметри повинні бути числами');
	}

	const area = width * height;
	return area;
}

try {
	const width = 12;
	const height = 10;
	const area = calcRectangleArea(width, height);
	console.log('Площа прямокутника:', area);
} catch (error) {
	console.error(error.message);
}
//4
class MonthException {
	constructor(message) {
		this.name = 'MonthException';
		this.message = message;
	}

}
function showMonthName(month) {
	const monthName = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'];
	if (month > 12 || month < 1) {
		throw new MonthException('Incorrect month number');
	}
	return monthName[month - 1];
}

try {
	console.log(showMonthName(5));
	console.log(showMonthName(14));
} catch (error) {
	console.log(`${error.name} ${error.message}`);

}
//5
function showUser(id) {
	if (id < 0) {
		throw new Error(`ID must not be negative: ${id}`);
	} if(typeof id !== 'number'){
		throw new Error(`ID must be number: ${id}`);
	}
	const user = { id: id };
	return user;
}

function showUsers(ids) {
	let validIds = [];
	for (let i = 0; i < ids.length; i++){
		try {
			let user = showUser(ids[i]);
			validIds.push(user);
		} catch (error) {
			console.log(error.message);
		}
	}
	return validIds;
	
}
showUsers([7, -12, 44, 22]);



