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
class Person{
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	showFullName() {
		 console.log(this.name + ' ' + this.surname);
	}
}
const person = new Person('	Ярослав', '	Любінець');
person.showFullName();

class Student extends Person{
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}
}













