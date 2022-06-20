import './style.css';
import patternMobile from './assets/patternMobile.svg';
import patternDesktop from './assets/patternDesktop.svg';
import icondice from './assets/icondice.svg';

const dividerMobile = document.getElementById('divide-Mobile');
const dividerDesktop = document.getElementById('divide-Desktop');
const dice = document.getElementById('dice');
const advice = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');
const generatorBtn = document.getElementById('generator-btn');

dividerMobile.src = patternMobile;
dividerDesktop.src = patternDesktop;

dice.src = icondice;

const getData = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  if (!response.ok) {
    throw new Error(`Something Went Wrong status: ${response.status}`);
  }
  const data = await response.json();
  advice.innerHTML = data.slip.advice;
  adviceId.innerHTML = data.slip.id;
};

generatorBtn.addEventListener('click', (e) => getData());
getData();
