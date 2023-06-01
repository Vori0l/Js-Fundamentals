///------1-----///
function getPromise(message, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(message);
		}, delay);

	});
}
getPromise("test promise", 3000).then(function (data) {
	console.log(data);
});
///------2------///
function calcArrProduct(arr) {
	return new Promise((resolve, reject) => {
		let element = 1;
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] !== 'number') {
				reject('Error! Incorrect array!');
				return;
			}
			element *= arr[i];
		}
		resolve(element)
	})
}
calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
///------3------///
new Promise(function (resolve, reject) {
	let number = prompt('Enter your number');
	if (number === null || isNaN(number)) {
		reject('Error input');
	} else {
		resolve(Number(number));
	}
}).catch(function (error) {
	console.error(error);
	return new Promise(function (resolve, reject) {
		let number = null;
		function askForNumber() {
			number = prompt('Введіть число');
			if (number === null || isNaN(number)) {
				askForNumber();
			} else {
				resolve(Number(number));
			}
		}
		askForNumber();
	});
}).then(function (result) {
	console.log("Ви ввели число:", result);
});
/------4------///
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
	for (let i = 0; i <= 10; i++) {
		await delay(i, Math.random() * 2000);
		console.log(i);
	}

}

showNumbers();