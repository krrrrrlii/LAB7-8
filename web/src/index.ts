import { maxProfit } from './stock';

const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const pricesInput = document.getElementById('prices') as HTMLInputElement;
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', (event) => {
  event.preventDefault();
  const prices = pricesInput.value.split(',').map(Number);
  const profit = maxProfit(prices);
  resultElement.textContent = `Максимальная прибыль: ${profit}`;
});

clearButton.addEventListener('click', (event) => {
  event.preventDefault();
  pricesInput.value = '';
  resultElement.textContent = '';
});
