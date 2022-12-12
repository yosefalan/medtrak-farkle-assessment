// TODO
// create scorebaord and game logic =>  create 2nd player => 2 player logic update => styling

//bank vs score

// TEST DICE
// const diceArr = [
// 	{'id': 1, 'value': 2},
// 	{'id': 1, 'value': 2},
// 	{'id': 1, 'value': 2},
// 	{'id': 1, 'value': 2},
// 	{'id': 1, 'value': 2},
// 	{'id': 1, 'value': 5}
// ]



/*Game*/

const diceArr = [];

function initializeDice(){
	for(let i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
}

/*Rolling dice values*/
function rollDice(){
	for(let i = 0; i < 6; i++){
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
		}
	}
	updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(){
	let diceImage;
	for(let i = 0; i < 6; i++){
		diceImage = "images/" + (diceArr[i].value) + ".png";
		document.querySelectorAll('img')[i].setAttribute("src", diceImage);
	}
	calculateScore()
}

function calculateScore(){

	let s = 'restful';
	let score = 0;
	let count = {};

	for (let die of diceArr){

		let val = die.value
		if(!(val in count)){
			count[val] = 0;
	} count[val] += 1

	}

	for (let num in count) {

		if (count[num] === 3) {

			if (num == 1) score += 1000;
			if (num == 2) score += 200;
			if (num == 3) score += 300;
			if (num == 4) score += 400;
			if (num == 5) score += 500;
			if (num == 6) score += 600;
		}

		else if (count[num] === 4) score += 2000;
		else if (count[num] === 5) score += 3000;
		else if (num == 1 && count[num] < 3) score += 100 * count[num];
		else if (num == 5 && count[num] < 3) score += 50 * count[num];
	}
	document.querySelector('.score').innerHTML = score;
}



function diceClick(img){
	let i = img.getAttribute("data-number");
	console.log(i)

	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked = 1;
	}
	else{
		diceArr[i].clicked = 0;
	}
}
