var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("span");
var dbuttons = document.querySelectorAll(".Delete");

function inputLength() {
	return input.value.length;
}

function updateAfterAdd() {
	items = document.querySelectorAll("span");
	dbuttons = document.querySelectorAll(".Delete");
	toggleItemListen();
	deleteItemListen();
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var buttond = document.createElement("button");
	buttond.className = "Delete";
	span.appendChild(document.createTextNode(input.value));
	buttond.appendChild(document.createTextNode("Delete"));
	li.appendChild(span);
	li.appendChild(buttond);
	ul.appendChild(li);
	input.value = "";
	updateAfterAdd();
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function toggleItemListen() {
	items.forEach((item) => {
		item.addEventListener("click", function(){
			item.classList.toggle("done")
		});
	});
}

function deleteItemListen() {
	dbuttons.forEach((dbutton) => {
		dbutton.addEventListener("click", function(){
			dbutton.parentNode.parentNode.removeChild(dbutton.parentNode);
		});
	});
}

