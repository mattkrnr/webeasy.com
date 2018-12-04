var isVisible = false;
var type = ""

function doctypePopup() {
	var elem = document.getElementById("doctypePopup");
	if (window.isVisible == false) {
		window.type = "doctype";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function doctypeExit() {
	var elem = document.getElementById("doctypePopup");
	elem.style.display = "none";
	if (type == "doctype"){
		window.isVisible = false;
		type = "";
	}
}
function aPopup() {
	var elem = document.getElementById("aPopup");
	if (window.isVisible == false) {
		window.type = "a";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function aExit() {
	var elem = document.getElementById("aPopup");
	elem.style.display = "none";
	if (type == "a") {
		window.isVisible = false;
		type = "";
	}
}
function bodyPopup() {
	var elem = document.getElementById("bodyPopup");
	if (window.isVisible == false) {
		type = "body";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function bodyExit() {
	var elem = document.getElementById("bodyPopup");
	elem.style.display = "none";
	if (type == "body") {
		window.isVisible = false;
		type = "";
	}
}
function divPopup() {
	var elem = document.getElementById("divPopup");
	if (window.isVisible == false) {
		type = "div";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function divExit() {
	var elem = document.getElementById("divPopup");
	elem.style.display = "none";
	if (type =="div") {
		window.isVisible = false;
		type = "";
	}
}
function headerPopup() {
	var elem = document.getElementById("headerPopup");
	if (window.isVisible == false) {
		type = "header";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function headerExit() {
	var elem = document.getElementById("headerPopup");
	elem.style.display = "none";
	if (type == "header") {
		window.isVisible = false;
		type = "";
	}
}
function imgPopup() {
	var elem = document.getElementById("imgPopup");
	if (window.isVisible == false) {
		type = "img";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function imgExit() {
	var elem = document.getElementById("imgPopup");
	elem.style.display = "none";
	if (type == "img") {
		window.isVisible = false;
		type = "";
	}
}
function mapPopup() {
	var elem = document.getElementById("mapPopup");
	if (window.isVisible == famaplse) {
		type = "map";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function mapExit() {
	var elem = document.getElementById("mapPopup");
	elem.style.display = "none";
	if (type == "map"){
		window.isVisible = false;
		type = "";
	}
}
function linkPopup() {
	var elem = document.getElementById("linkPopup");
	if (window.isVisible == false) {
		type = "link";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function linkExit() {
	var elem = document.getElementById("linkPopup");
	elem.style.display = "none";
	if (type == "link") {
		window.isVisible = false;
		type = "";
	}
}
 function tablePopup() {
	var elem = document.getElementById("tablePopup");
	if (window.isVisible == false) {
		type = "table";
		elem.style.display = "block";
		window.isVisible = true;
	}
}
function tableExit() {
	var elem = document.getElementById("tablePopup");
	elem.style.display = "none";
	if (type == "table") {
		window.isVisible = false;
		type = "";
	}
}

