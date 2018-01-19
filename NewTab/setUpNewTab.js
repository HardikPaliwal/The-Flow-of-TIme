"use strict";
let weekday= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];
let month= ["January",	"February", "March", "April",	
"May",	"June",	"July",	"August",	"September", "October",	"November",	"December"];
let toDisplayOrNotto= ( "true" == (localStorage.getItem("showAge")));
let quote= localStorage.getItem("quote");
let author=localStorage.getItem("author");
let theme=localStorage.getItem("theme");

if (theme !=null){
	switch (theme) {
		case "Black":
		document.body.style["background-color"]= ("black");
		document.body.style["color"]="white";
		break;
		case "White":
		document.body.style["background-color"]= ("white");
		document.body.style["color"]="black";
		break;
		case "Scenic":
		setScenicBackground ();
		break;
		default:
		break;

	}
}
if (author!= null){
	document.querySelector("#author").innerHTML=author;
}
if (toDisplayOrNotto){
	if (localStorage.getItem ("ofBirth") != null){
		console.log ((localStorage.getItem ("ofBirth")));
			loopAge ((localStorage.getItem ("ofBirth")));
	} }

if (quote!= null){
	console.log (quote);
	document.getElementById("quotestuff").innerHTML = (quote);
	let sizeOfQuote= 9/Math.pow(quote.length, 1/6);
    if (quote.length>450){
    	document.getElementById("quotestuff").style["width"]= 100+"%";
    }
	else if (quote.length>269){
		document.getElementById("quotestuff").style["width"]= 70+"%";
	}
    document.getElementById("quotestuff").style["font-size"]= sizeOfQuote+"vh";
    document.getElementById("quotestuff").style["font-size"]= sizeOfQuote+"vh";
	}

function loopAge (birth){
	setInterval ( function (){
		let lul= new Date(birth);
	let now= new Date();
	console.log (howManyLeapYears(lul));
	let age= (now.getTime() - lul.getTime()) - (howManyLeapYears(lul))*1000*24*60*60;
	 age =	(age/(1000*24*60*60*365)).toFixed(10);
	document.getElementById("returdn").innerHTML = age; 
	
}, 50)
}

setInterval (function (){
	let now= new Date();
	document.getElementById("bigDate").innerHTML=
	 (weekday[now.getDay()] +", "+ now.getDate() + " "+month[now.getMonth()]
	 	+ " " + now.getFullYear());

}, 100)

setInterval (function () {
	let now= new Date();
	let MinuteFromNow = 
	new Date (now.getFullYear(), now.getMonth(), now.getDate(), 
		      now.getHours(), now.getMinutes() + 1, 0, 0);
	let seconds= Math.ceil ((MinuteFromNow-now)/1000);
	
	document.getElementById("seconds").innerHTML= seconds;

}, 30)

setInterval (function () {
	let now= new Date();
	let HourFromNow = 
	new Date (now.getFullYear(), now.getMonth(), now.getDate(), 
		      now.getHours() + 1, 0, 0, 0);
	let minutes=  Math.ceil((HourFromNow-now)/(1000 * 60))-1
	if (minutes== 1){
		document.getElementById("min").innerHTML="Minute";
	}
	else {
		document.getElementById("min").innerHTML="Minutes"
	}
	document.getElementById("minutes").innerHTML= minutes;
	

}, 100)

setInterval (function () {
	let now= new Date();
	let DayFromNow = 
	new Date (now.getFullYear(), now.getMonth(), now.getDate()+1, 
		      0, 0, 0, 0);
	let Hours= Math.ceil((DayFromNow-now)/(1000 * 60 *60)) -1;
	document.getElementById("hours").innerHTML= Hours;
	if (Hours== 1){
		document.getElementById("hrs").innerHTML="Hour";
	}
	else {
		document.getElementById("hrs").innerHTML="Hours"
	}
	document.getElementById("hours").innerHTML= Hours;

}, 100)

function howManyLeapYears(birth){
	let now= new Date();
	let yearOfBirth= birth.getFullYear();
	let leapDays=0;
	for (let i = 0; i <= (now.getFullYear()-yearOfBirth ); i++){
        if ((i%4 ==  0) && i!= 2000){
        	leapDays +=1;
        }
    }
    let leapTime= new Date(yearOfBirth, 1, 29);
      if (birth-leapTime > 0){
      	leapDays -= 1
      	if (now.getFullYear%4 ==0){
      		leapDays -=1
      	}
      }
      return leapDays;
	}

