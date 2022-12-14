
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
let score = 0;
let player1Score = 0;
let player2Score = 0
let p1Turn = true;

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
	document.querySelectorAll('.score')[2].innerHTML = score;
}



function diceClick(img){
	let i = img.getAttribute("data-number");
	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked = 1;
	}
	else{
		diceArr[i].clicked = 0;
	}
}


function bankScore(img){

	if (p1Turn === true) {
	player1Score += score;
	document.querySelectorAll('.score')[0].innerHTML = player1Score;
	score = 0
	document.querySelectorAll('.score')[2].innerHTML = score;
	} else {
		player2Score += score;
	document.querySelectorAll('.score')[1].innerHTML = player2Score;
	score = 0
	document.querySelectorAll('.score')[2].innerHTML = score;
	}

}
