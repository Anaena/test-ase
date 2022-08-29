'use strict';

// объекты пропущенных слов
const word01 = {чудесный: 1, прекрасный: 0};
const word02 = {девчоночка: 0, красавица: 1};
const word03 = {Авроры: 1, Конторы: 0};
const word04 = {Вчера: 0, Вечор: 1};
const word05 = {как: 1, так: 0};
const word06 = {печальная: 1, нахальная: 0};
const word07 = {домами: 0, коврами: 1};
const word08 = {Прозрачный: 1, Дремучий: 0};
const word09 = {журчит: 0, блестит: 1};

const main = document.querySelector('.main');
const btnShow = document.querySelector('.text-btn');
const textWrapper = document.querySelector('.text-wrapper');
const timer = document.querySelector('#dqtime');

// ф-ция определяет что и куда будет вставлено
const beforeElementsFromString = (parent, domString) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeEnd', domString);
};

// добавляем слова
const controlItemString = (key, index) =>
  `<option value=${index}>${key}</option>`;     

const firstWordString = Object.keys(word01).map(controlItemString).join('');
const secondWordString = Object.keys(word02).map(controlItemString).join('');
const thirdWordString = Object.keys(word03).map(controlItemString).join('');
const fourthWordString = Object.keys(word04).map(controlItemString).join('');
const fifthWordString = Object.keys(word05).map(controlItemString).join('');
const sixthWordString = Object.keys(word06).map(controlItemString).join('');
const seventhWordString = Object.keys(word07).map(controlItemString).join('');
const eighthWordString = Object.keys(word08).map(controlItemString).join('');
const ninthWordString = Object.keys(word09).map(controlItemString).join('');

// сам текст
const createTextItem = `<p class="text">
  Мороз и солнце; день <select name="word" required><option value=""></option>`+ firstWordString + `</select>!<br>
  Еще ты дремлешь, друг прелестный — <br>
  Пора, <select name="word" required><option value=""></option>`+ secondWordString + `</select>, проснись:<br>
  Открой сомкнуты негой взоры<br>
  Навстречу северной <select name="word" required><option value=""></option>`+ thirdWordString + `</select>,<br>
  Звездою севера явись!<br>
  <br>
  <select name="word" required><option value=""></option>`+ fourthWordString + `</select>, ты помнишь, вьюга злилась,<br>
  На мутном небе мгла носилась;<br>
  Луна, <select name="word" required><option value=""></option>`+ fifthWordString + `</select> бледное пятно,<br>
  Сквозь тучи мрачные желтела,<br>
  И ты <select name="word" required><option value=""></option>`+ sixthWordString + `</select> сидела —<br>
  А нынче… погляди в окно:<br>
  <br>
  Под голубыми небесами<br>
  Великолепными <select name="word" required><option value=""></option>`+ seventhWordString + `</select>,<br>
  Блестя на солнце, снег лежит;<br>
  <select name="word" required><option value=""></option>`+ eighthWordString + `</select> лес один чернеет,<br>
  И ель сквозь иней зеленеет,<br>
  И речка подо льдом <select name="word" required><option value=""></option>`+ ninthWordString + `</select>.</p>
  <button class="btn-submit" type="submit">Проверить</button>`    

//  таймер
const timerQuestionCountDown = () => {
  var mins = 3;  
  var secs = mins * 60;
  var currentSeconds = 0;
  var currentMinutes = 0;
  
  const decrement = () => {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    timer.innerHTML = currentMinutes + ":" + currentSeconds; 
    if (secs !== -1) setTimeout(decrement, 1000);
  };
  setTimeout(decrement, 0);
};

// добавляем текст в форму
const render = () => {
  beforeElementsFromString(textWrapper, createTextItem);
};

const itemClickHandler = () => {
  render();
  timerQuestionCountDown();
};

const init = () => {
  btnShow.addEventListener('click', itemClickHandler);
};

init();
