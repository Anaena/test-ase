const dice = document.querySelectorAll('.dice');
const buttonRoolDice = document.querySelector('.dice-roll');
const status = document.querySelector('.status');

const rollDice = () => {
  dice.forEach(el => {    
    const diceSide = Math.floor(Math.random() * 6) + 1;
    
    el.innerHTML = diceSide;
    
    if (el.classList.contains('flipping-one') || el.classList.contains('flipping-two')) {
      el.classList.toggle('flipping-one');
      el.classList.toggle('flipping-two');
    } else {
      el.classList.add('flipping-one');
    }
  });
  
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += +dice[i].textContent;
  }
  const diceTotal = sum;
  
  status.innerHTML = 'Ваш счет ' + diceTotal + '.';    
};

window.addEventListener('DOMContentLoaded', function () {
  buttonRoolDice.addEventListener('click', rollDice);
});