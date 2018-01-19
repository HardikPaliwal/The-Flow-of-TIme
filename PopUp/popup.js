	"use strict";
  document.addEventListener('DOMContentLoaded', function (){
	document.getElementById ("saveSettings").addEventListener ("click", saveSetting);
});
if (localStorage.getItem ("quote")!= null){
	document.getElementById("userQuote").innerHTML=localStorage.getItem ("quote");
}
if (localStorage.getItem ("author")!= null){
	document.getElementById("author").innerHTML=localStorage.getItem ("author");
}
if (localStorage.getItem ("showAge") == "false"){
  	let checkbox= document.querySelector("#checkboxAge");
  	checkbox.checked= false;
  }

if ( localStorage.getItem("remember") != null){
   	let remember= localStorage.getItem("remember");
   	document.getElementById("date").value=remember;
   }
if (localStorage.getItem("theme") != null){
	switch (localStorage.getItem("theme")) {
		case "Black":
		document.getElementById("Black").checked= true;
		break;
		case "White":
		document.getElementById("White").checked= true;
		break; }
}
function saveSetting(){
	let theme=document.querySelector('input[name="contact"]:checked').value;
	localStorage.removeItem("theme");
	localStorage.setItem("theme", theme);
	quoteSaver();
	handler();
}


function quoteSaver (){
    let quote= document.getElementById ("userQuote");
    localStorage.removeItem ("quote");
    localStorage.setItem ("quote", quote.value);
    console.log ("saved: " +localStorage.getItem("quote"));

    let author=document.getElementById ("author");
    localStorage.removeItem ("author");
     localStorage.setItem ("author", author.value);
}

function  handler(){
	let dateOfBirth= document.getElementById ("date");
	let remember= dateOfBirth.value;
	localStorage.removeItem("remember");
	localStorage.setItem ("remember", remember);
	console.log ("saved "+remember);

	let date= new Date (dateOfBirth.value);
	localStorage.removeItem("ofBirth");
	localStorage.setItem ("ofBirth", date);
	console.log ("saved "+date);
	localStorage.removeItem("showAge");
	console.log (document.querySelector("#checkboxAge").checked);

	if (!document.querySelector("#checkboxAge").checked){
	localStorage.setItem("showAge", false);
	}
	else { localStorage.setItem("showAge", true); 
	}
	
}



