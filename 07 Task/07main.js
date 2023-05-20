///------1------///
let myWindow = window.open('', '', 'width=300, height=300');
setTimeout(function () {
	myWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
	myWindow.moveTo(200, 200);
}, 4000);
setTimeout(function () {
	myWindow.close();
}, 6000);
///------2------///
function changeCSS() {
	let change = document.getElementById('text');
	change.style.color = 'orange';
	change.style.fontSize = '20px';
	change.style.fontFamily = 'Comic Sans MS'
}
///------3------///
function changebackgroundblue() {
	document.body.style.backgroundColor = 'blue'
}
function changebackgroundpink() {
	document.body.style.backgroundColor = 'pink'
}
let button3 = document.getElementById('button3');
button3.addEventListener('mousedown', function () {

	document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function () {

	document.body.style.backgroundColor = 'white';
});
let link = document.getElementById('link');

link.addEventListener('mouseover', function () {

	document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function () {
	document.body.style.backgroundColor = 'white';
});
///------4------///
function deleteOption() {
	let selectOption = document.getElementById("Mylist");
	let selectValue = selectOption.value;

	if (selectValue !== "") {
		selectOption.remove(selectOption.selectedIndex);
	}
};
///------5------///
let btnn = document.getElementById('buttonn');
btnn.addEventListener('click', ClickMouse);
btnn.addEventListener('mouseover', MouseOver);
btnn.addEventListener('mouseout', MouseOut);

function ClickMouse() {
	document.getElementById('pId').innerHTML += "I was pressed <br>";
}
function MouseOver() {
	document.getElementById('pId').innerHTML += "Mouse on me! <br>";
}
function MouseOut() {
	document.getElementById('pId').innerHTML += "Mouse is not on me! <br>"
}
///------6------///
function updateScreen() {
	var screenWidth = window.innerWidth;
	var screenHeight = window.innerHeight;

	var paragraph = document.getElementById('screenSize');
	paragraph.textContent = 'Width: ' + screenWidth + ' Height: ' + screenHeight;
}

window.addEventListener('resize', updateScreen);

updateScreen();

  ///------7------///

  const countrySelect = document.getElementById('country');
  const citiesSelect = document.getElementById('cities');
  const selectedInfo = document.getElementById('selected');

  const citiesByCountry = {
    ger: ['Berlin', 'Hamburg', 'Munich'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Odessa'],
  };

  countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    citiesSelect.innerHTML = '';

    cities.forEach(city => {
      const option = new Option(city, city);
      citiesSelect.add(option);
    });

    updateSelectedInfo();
  });

  citiesSelect.addEventListener('change', () => {
    updateSelectedInfo();
  });

  function updateSelectedInfo() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCity = citiesSelect.value;
    selectedInfo.textContent = `Обрана країна: ${selectedCountry}, місто: ${selectedCity}`;
  }

  updateSelectedInfo();	