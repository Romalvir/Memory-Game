//game will be played inside the event listener

document.addEventListener("DOMContentLoaded", ()=> {

//card options, this will be our array

const cardArray = [

{
	name: "flower",
 	img: "img/flower.png"
},

{
	name: "flower",
 	img: "img/flower.png"
},

{
	name: "ghost",
 	img: "img/ghost.png"
},

{
	name: "ghost",
 	img: "img/ghost.png"
},
{
	name: "mario",
 	img: "img/mario.jpeg"
},

{
	name: "mario",
 	img: "img/mario.jpeg"
},

{
	name: "star",
 	img: "img/star.png"
},

{
	name: "star",
 	img: "img/star.png"
},

{
	name: "mush",
 	img: "img/mush.jpeg"
},

{
	name: "mush",
 	img: "img/mush.jpeg"
},

{
	name: "green",
 	img: "img/green.jpeg"
},


{
	name: "green",
 	img: "img/green.jpeg"
}


]
//reference the grid you want to select
const grid = document.querySelector(".grid")

// use a for loop to create image elements. AKA create Board

function createBoard () {
	for (i = 0; i < cardArray.length; i++) {
		//create image element by using a VAR
		var card = document.createElement("img")
		//set attribute to the image path for the blanks
		card.setAttribute("src", "img/spectre.png")
		//add a data id to them as well
		card.setAttribute("data-id", i)
		//add event listener when its clicked it invokes flipCard
		//card.addEventListener("click", flipCard)
		//now append the above stuff you made
		grid.appendChild(card)
	}
}

//invoke the function, like so

createBoard()

})



 // • push()
 // • querySelector()
 // • SetAttribute()
 // • getAttribute()
 // • appendChild()
 // • Math.random()
 // • sort()
 // • For loops
 // • createElement()