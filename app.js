// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./utils.js";

const playButton = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const draw = document.getElementById('draws');
const error = document.getElementById('error');

let wins = 0;
let losses = 0;
let draws = 0;

  playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    console.log('button-click');
    if(!selected){
      return error.classList.remove('hidden');
    }
    console.log(selected);
    error.classList.add('hidden');
    const userThrow = selected.value;
    const computerThrow = getRandomThrow();

    if(didUserWin(userThrow, computerThrow) === true) wins++;
    if(didUserWin(userThrow, computerThrow) === false) losses++;
    if(didUserWin(userThrow, computerThrow) === 'draw') draws++;
    
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    draw.textContent = draws;
  })
