//--------1-------//
const list = document.getElementById('list');
const firstItem = list.children[0];
console.log(firstItem.textContent);

const lastItem = list.children[4];
console.log(lastItem.textContent);

const secondItem = list.children[1];
console.log(secondItem.textContent);

const fourthItem = list.children[3];
console.log(fourthItem.textContent);

const thirdItem = list.children[2];
console.log(thirdItem.textContent);
//--------2-------//
let header = document.querySelector("h1");
header.style.backgroundColor = "green";

let pId = document.getElementById("myDiv");

let firstp = pId.children[0];
firstp.style.fontWeight = "bold";

let secondp = pId.children[1];
secondp.style.color = "red";

let thirdp = pId.children[2];
thirdp.style.textDecoration = "underline"

let fourthp = pId.children[3];
fourthp.style.fontStyle = "italic"

let List = document.getElementById("myList");
List.style.display = "flex";
List.style.listStyle = "none";
//--------3-------//
let main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

let div = document.createElement("div");
div.setAttribute("id", "myDiv");

let p = document.createElement("p");
let pText = document.createTextNode("First paragraph");
p.appendChild(pText);

div.appendChild(p);
main.appendChild(div);

document.body.appendChild(main);
//--------4-------//
const button = document.querySelector(".btn");
const inputs = document.querySelectorAll(".arr");
const outBlock = document.querySelector(".out");

button.onclick = () => {
  let output = "";
  inputs.forEach((input) => {
    output += `${input.getAttribute("data-form")}: ${input.value}<br>`;
  });
  outBlock.innerHTML = output;
};
//--------5-------//
circleElements.forEach(function(element) {
	let dataAnimValue = element.getAttribute("data-anim");
	element.classList.add(dataAnimValue);
	let isAnimationApplied = element.classList.contains(dataAnimValue);  
	if (isAnimationApplied) {
	  console.log("Анімація застосована.");
	} else {
	  console.log("Анімація не застосована.");
	}
});
//--------6-------//
const colorContainers = document.querySelectorAll(".color");
const sizeButtons = document.querySelectorAll(".size-button");
const materialOptions = document.querySelectorAll(".material-option");
const priceElement = document.getElementById("outprice");

colorContainers.forEach((colorContainer) => {
  colorContainer.addEventListener("click", function () {
    const price = parseFloat(colorContainer.dataset.price);
    updatePrice(price);
  });
});

function updatePrice(newPrice) {
  priceElement.textContent = newPrice.toFixed(2);
}

sizeButtons.forEach((sizeButton) => {
  sizeButton.addEventListener("click", function () {
    const price = parseFloat(sizeButton.dataset.price);
    updatePrice(price);
  });
});
