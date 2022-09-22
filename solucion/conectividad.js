let selections = document.querySelector('.selection');
let opciones = document.querySelector('.options');
const buttonResponse = document.querySelector('.button');
const question = document.querySelector('#answer');
const reply = document.querySelector('#response');
let valor = document.querySelector('.score')
let ratingScore = 3;

buttonResponse.addEventListener("click", showGratitude);
//selections.addEventListener('click', showColor);

function showGratitude(params) {
    reply.classList.toggle('inactive');
    question.classList.add('inactive');
}
