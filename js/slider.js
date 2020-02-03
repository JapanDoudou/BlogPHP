'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;


var images = [
	{url:'img/slider/1.jpg',alt:"ChiFuMi"},
	{url:'img/slider/2.jpg',alt:"Space PiouPiou V3"},
	{url:'img/slider/3.jpg',alt:"Space PiouPiou V2"},
	{url:'img/slider/4.jpg',alt:"MemoryGame V2"},
]

/*** Button VAR creation ***/

var toolBar; //To show the button if needed
var tbPrevious;
var tbPlay;
var tbNext; 
var tbRandom;
// The chips to create //
var selector;
//The image is a button too
var imgBtn;
var currentState = 0;
var timer = null;

//Touch var
var ongoingTouches = [];

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function showToolBar(){
	$("#toolbar").toggle(1000);
}

function imageChanger(url,alt){
	document.querySelector("#slider img").src=(url);
	document.querySelector("#slider img").alt=(alt);
	document.querySelector("#slider figcaption").innerText = alt;
}

function nextImage(){

	if(currentState == images.length -1)
	{
		currentState = -1;
	}
	currentState++;
	imageChanger(images[currentState].url,images[currentState].alt);
	removeChip();
	document.querySelector('div[data-id="' + currentState + '"]').classList.add('current');

}

function previousImage(){

	if(currentState == 0)
	{
		currentState = images.length;
	}
	currentState--;
	imageChanger(images[currentState].url,images[currentState].alt);
	removeChip();
	document.querySelector('div[data-id="' + currentState + '"]').classList.add('current');
}

function playImage(){
	if (timer === null) {
		timer = setInterval(nextImage, 3000);
		tbPlay.querySelector("i").classList.replace("fa-play","fa-pause");
	} else {
		clearInterval(timer);
		timer = null;
		tbPlay.querySelector("i").classList.replace("fa-pause","fa-play");
	}

}


function randomPlay(){
	var previous = currentState;
	currentState = Math.floor(Math.random()*images.length);
	while(currentState == previous)
	{
		currentState = Math.floor(Math.random()*images.length);
	}
	imageChanger(images[currentState].url,images[currentState].alt);
	removeChip();
	document.querySelector('div[data-id="' + currentState + '"]').classList.add('current');
}


function selectorGenerator(){

	for(var i=0; i<images.length; i++)
	{
		var chip = document.createElement("DIV");
		chip.classList.add("chip");
		if(i==0){
			chip.classList.add("current");
		}
		chip.dataset.id = i;
		chip.addEventListener("click", onChooseChip);
		selector.appendChild(chip);
	}
}

function onChooseChip()
{
	removeChip();
	imageChanger(images[this.dataset.id].url, images[this.dataset.id].alt);
	currentState = this.dataset.id;	
	this.classList.add('current');
	//this refer to the addEventListener in selectorGenerator on the chips
}

function removeChip(){
	var current = document.querySelector(".current");
	current.classList.remove('current');
}

function keyDetection(){
	document.addEventListener("onkeydown",function(event){

		const theKey = event.key;
		if (theKey === "40")
		{
			window.alert("la touche down est pressée");
		} else if (theKey === "39"){
			window.alert("la touche down est pressée");
		} else if (theKey === "38"){
			window.alert("la touche down est pressée");
		} else {
			window.alert("la touche down est pressée");
		}
	},false);
}

function onKeyPress(event)
{
	if (event.keyCode == ARROW_RIGHT) {
		nextImage();
	} else if (event.keyCode == ARROW_LEFT) {
		previousImage();
	}
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


document.addEventListener('DOMContentLoaded', function () {



	toolBar = document.querySelector("#toolbar");
	document.querySelector("#toolbar-toggle").addEventListener("click", showToolBar);
	tbPrevious = document.querySelector("#slider-previous").addEventListener("click",previousImage);
	tbNext = document.querySelector("#slider-next").addEventListener("click",nextImage);
	tbRandom = document.querySelector("#slider-random").addEventListener("click", randomPlay);
	tbPlay = document.querySelector("#slider-toggle"); 
	tbPlay.addEventListener("click", playImage);
	imgBtn = document.querySelector("#slider img");
	imgBtn.addEventListener("click",nextImage);

	//*************** Touch Event ****************//

	//*********** Depend of Utilities swipedetect function ***************/

  	imgBtn.addEventListener("touchstart", swipedetect, false);
	swipedetect(imgBtn, function(swipedir){
	    
	    if (swipedir =='left'){
	        console.log('You just swiped left!')
	        previousImage();
	    } else if (swipedir =="right"){
	    	console.log("You just swiped right")
	    	nextImage();
	    }
		})

  	//***************** KeyBoard Event **************/
	document.addEventListener('keydown', onKeyPress);
	keyDetection();


	//******************* Chip Generator ****************/
	selector = document.querySelector("#selector");
	selectorGenerator();
	





});