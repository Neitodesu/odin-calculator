const buttonDiv = document.querySelector('.buttons');
const input = document.querySelector('#display');
input.value = '';

const buttons = [
  1,
  2,
  3,
  '+',
  4,
  5,
  6,
  '-',
  7,
  8,
  9,
  '*',
  0,
  '.',
  '/',
  '=',
  'AC',
];

const operators = ['+', '-', '*', '/', '='];

let firstNum = 0;
let operator;
let secondNum;

const reset = () => {
  firstNum = null;
  operator = null;
  secondNum = null;
};

buttons.forEach((symbol) => {
  let newButton = document.createElement('button');
  newButton.textContent = symbol;

  newButton.addEventListener('click', () => {
    if (operators.includes(symbol)) {
      if (symbol == '=') {
        if (firstNum != null) {
          secondNum = input.value;
          let numA = Number(firstNum);
          let numB = Number(secondNum);

          if (operator == '+') {
            input.value = numA + numB;
          } else if (operator == '-') {
            input.value = numA - numB;
          } else if (operator == '*') {
            input.value = numA * numB;
          } else if (operator == '/') {
            if (numB == 0) {
              input.value = 'Nice Try lol';
            } else {
              input.value = +(numA / numB).toFixed(2);
            }
          }
          reset();
        }
      } else {
        operator = symbol;
        firstNum = input.value;
        input.value = '';
      }
    } else if (symbol == 'AC') {
      reset();
      input.value = '';
    } else {
      if (symbol == '.') {
        if (input.value != '' && !input.value.includes(symbol)) {
          input.value += symbol;
        }
      } else if (input.value == '0') {
        input.value = symbol;
      } else {
        input.value += symbol;
      }
    }
  });
  buttonDiv.appendChild(newButton);
});
