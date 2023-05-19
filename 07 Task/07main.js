//1
// let myWindow = window.open('', '', 'width=300, height=300');
// setTimeout(function () {
// 	myWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(function () {
// 	myWindow.moveTo(200, 200);
// }, 4000);
// setTimeout(function () {
// 	myWindow.close();
// }, 6000);
//2
// document.getElementById(id).style.property = new sty
// function changeCSS() {
// 	let change = document.getElementById('text');
// 	change.style.color = 'orange';
// 	change.style.fontSize = '20px';
// 	change.style.fontFamily = 'Comic Sans MS'
// }
//3
function changebackgroundblue() {
	document.body.style.backgroundColor = 'blue'
}
function changebackgroundpink() {
	document.body.style.backgroundColor = 'pink'
}
let button3 = document.getElementById('button3');
 button3.addEventListener('mousedown', function() {
	
	document.body.style.backgroundColor = 'brown';
});
 button3.addEventListener('mouseup', function() {
	
	document.body.style.backgroundColor = 'white';
});
let link = document.getElementById('link');

link.addEventListener('mouseover', function() {
  
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function() {
	document.body.style.backgroundColor = 'white';
});