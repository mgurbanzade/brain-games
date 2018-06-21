import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import gameCore from '../core';

const numberLimit = 10;
const description = 'What is the result of the expression?';

const mathify = (val1, operator, val2) => {
  let result;

  switch (true) {
    case (operator === '*'): result = val1 * val2; break;
    case (operator === '-'): result = val1 - val2; break;
    default: result = val1 + val2; break;
  }

  return result;
};

const generateQnA = (num) => {
  let operator;

  switch (true) {
    case (num > 6.66): operator = '*'; break;
    case (num > 3.33 && num < 6.66): operator = '-'; break;
    default: operator = '+';
  }

  const randNum1 = generateNumber(numberLimit);
  const randNum2 = generateNumber(numberLimit);
  const question = `${randNum1} ${operator} ${randNum2}`;
  const answer = mathify(randNum1, operator, randNum2);

  return cons(question, answer);
};

const askForCalc = () => {
  const response = () => generateQnA(generateNumber(numberLimit));
  gameCore(description, response);
};

export default askForCalc;
