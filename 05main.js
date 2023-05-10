//1
class Сircle {

	constructor(x, y, radius) {

		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	getLenght() {
		return 2 * Math.PI * this.radius;
	}
	static getLenghtRadius() {
		return 2 * Math.PI * this.radius
	}

	copyObject() {
		return Object.assign({}, this);
	}

	static create(x, y, radius) {
		return new Circle(x, y, radius);
	}
	pointInside(x, y) {
		const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
		return distance <= this.radius;
	}
	objectToString() {
		return `Circle with center at (${this.x},${this.y}) and radius ${this.radius}`
	}
}
//2
function propsCount(currentObject) {
	return Object.keys(currentObject).length;
}
let house = {
	location: "Italy",
	square: 300,
	price: 100000
};

propsCount(house);
//3
class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	showFullName() {
		console.log(`${this.surname}  ${this.name}`);
	}
}
const person = new Person('	Василь', 'Петрович');
person.showFullName();

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	showFullName(midleName) {
		console.log(`${this.surname} ${this.name} ${midleName}`);
	}

	showCourse(currentYear) {
		const course = currentYear - this.year + 1;
		if (course < 1 || course > 6) {
			throw new Error('Invalid course');
		}
		console.log(`Current course: ${course}`);
	}
}
const student = new Student("Павло", "Smith", 2021);
student.showFullName("Олегович");
student.showCourse(2023);
//4
class Marker {
	constructor(color, ink_level,) {
		this.color = color;
		this.ink_level = ink_level;

	}
	print(text) {
		let printedText = "";
		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			if (char !== " " && this.ink_level > 0) {
				printedText += char;
				this.ink_level -= 0.5;
			} else {
				printedText += " ";
			}
		}
		console.log(`${printedText}`, `color: ${this.color}`);
	}
}
const redMarker = new Marker("red", 50);
redMarker.print("Hello, world!");

class MarkerRefill extends Marker {
	constructor(color, ink_level, AmountRefill) {
		super(color, ink_level);
		this.AmountRefill = AmountRefill;

	}
	refill() {
		this.ink_level += this.AmountRefill;
		console.log('Marker has been refilled.');
	}
}
//5
class Worker {
	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
		this._experience = 1.2;
	}
	showSalary() {
		const salary = this.dayRate * this.workingDays;
		console.log(`Salary ${salary}`);
		return salary;
	}
	showSalaryWithExperience() {
		const SalaryWithExperience = this.workingDays * this.dayRate * this._experience;
		console.log(`Salary  ${SalaryWithExperience} with experience`);
		return SalaryWithExperience;
	}
	get showExp() {
		return this._experience;
	}

	set setExp(value) {
		this._experience = value;
	}

}

const worker1 = new Worker("Oleh Olehov", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker('Pavlo Pavlov', 44, 12);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience:" + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();


const worker3 = new Worker("Ivan Ivanov", 43, 28);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();