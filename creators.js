// Get the button that opens the modal
var btn = document.getElementById("myBtn");

//open the modal box if the button is clicked 
function hamzahbuttonClicked(){ 
	var modal = document.getElementById('myModalhamzah');
	modal.style.display = "block";
}
//close the modal box only if they click the x button
function closedHamzah(){ 
	var modal = document.getElementById('myModalhamzah');
	var span = document.getElementsByClassName("closehamzah")[0];
	modal.style.display = "none";
}
function galebuttonClicked(){ 
	var modal = document.getElementById('myModalgale');
	modal.style.display = "block";
}
function closedGale(){ 
	var modal = document.getElementById('myModalgale');
	var span = document.getElementsByClassName("closegale")[0];
	modal.style.display = "none";
}
function justinbuttonClicked(){ 
	var modal = document.getElementById('myModaljustin');
	modal.style.display = "block";
}
function closedJustin(){ 
	var modal = document.getElementById('myModaljustin');
	var span = document.getElementsByClassName("closejustin")[0];
	modal.style.display = "none";
}
function mattbuttonClicked(){ 
	var modal = document.getElementById('myModalmatt');
	modal.style.display = "block";
}
function closedMatt(){ 
	var modal = document.getElementById('myModalmatt');
	var span = document.getElementsByClassName("closematt")[0];
	modal.style.display = "none";
}
function stephbuttonClicked(){ 
	var modal = document.getElementById('myModalsteph');
	modal.style.display = "block";
}
function closedSteph(){ 
	var modal = document.getElementById('myModalsteph');
	var span = document.getElementsByClassName("closesteph")[0];
	modal.style.display = "none";
}