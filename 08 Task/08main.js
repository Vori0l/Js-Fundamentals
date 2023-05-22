///------1------///
function FirstUpprecase(str) {
	let regexp = /^[A-Z]/;
	if (regexp.test(str))
		console.log("String's starts with uppercase character");
	else
		console.log("String's not starts with uppercase character");
}
FirstUpprecase('abc');
FirstUpprecase('Abc');

///------2------///
function Emailcheck(email) {
	let regexp = /^[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*@[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}$/

	return regexp.test(email);
}
console.log(Emailcheck('Test.email123@gmail.com'));

///------3------///
function ChangeString(str) {
	let regexp = /^([A-Za-z]+)\s+([A-Za-z]+)$/;
	return str.replace(regexp, "$2 $1");
}
console.log(ChangeString("Java Script"));

///------4------///
function CardValidator(number) {
	let regexp = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
	if (regexp.test(number)) {
		return true;
	} else {

		return false;
	}
}

console.log(CardValidator('0682-2345-1123-1127'));

///------5------///
function ValidEmail(useremail) {
	let regexp = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

	if (regexp.test(useremail)) {
		return "Email is correct!";
	} else {
		return "Email is not correct!";
	}
}
console.log(ValidEmail('my_mail@gmail.com'));
console.log(ValidEmail('#my_mail@gmail.com'));
console.log(ValidEmail('my_ma--il@gmail.com'));

///------6------///	
function ValidLogin(login) {
	let regexp = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;
	let number = login.match(/[0-9]+(\.[0-9]+)?/g);

	if (regexp.test(login)) {
		console.log("true");
		console.log(number.join(' , '));
	} else {
		console.log("false");
		console.log(number.join(' , '));
	}
}
ValidLogin('ee1.1ret3');
ValidLogin('ee1*1ret3');
