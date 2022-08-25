const diceOne = document.querySelector('[data-dice="side-1"]');
const diceTwo = document.querySelector('[data-dice="side-2"]');
const diceThree = document.querySelector('[data-dice="side-3"]');
const diceFour = document.querySelector('[data-dice="side-4"]');
const dice = document.querySelectorAll('.dice')
const buttonRoolDice = document.querySelector('.dice-roll');
const status = document.querySelector('.status');

const rollDice = () => {
  const sideFirst = Math.floor(Math.random() * 6) + 1;
  const sideSecond = Math.floor(Math.random() * 6) + 1;
  const sideThird = Math.floor(Math.random() * 6) + 1;
  const sideFourth = Math.floor(Math.random() * 6) + 1;
  const diceTotal = sideFirst + sideSecond + sideThird + sideFourth;

  dice.forEach(el => {
    el.classList.add('flipping');

    if(el.classList.contains('flipping-one')) {
      el.classList.remove('flipping-one');
      el.classList.add('flipping-two');
    } else if (el.classList.contains('flipping-two')) {
      el.classList.remove('flipping-two');
      el.classList.add('flipping-one');
    } else {
      el.classList.add('flipping-one');
    };
  });
  
  diceOne.innerHTML = sideFirst;
  diceTwo.innerHTML = sideSecond;
  diceThree.innerHTML = sideThird;
  diceFour.innerHTML = sideFourth;
  
  status.innerHTML = 'Ваш счет ' + diceTotal + '.';  
  
  if (sideFirst === sideSecond === sideThird === sideThird) {
    status.innerHTML += ' Вам выпал дубль! Киньте кости еще раз!';
  }

};

window.addEventListener('DOMContentLoaded', function () {
  buttonRoolDice.addEventListener('click', rollDice);
});