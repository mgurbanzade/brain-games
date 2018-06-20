import { cons } from 'hexlet-pairs';
import { generateNumber, gameCore } from '..';

const numberLimit = 1000;
const generatePair = () => `${generateNumber(numberLimit)} ${generateNumber(numberLimit)}`;

const findGcd = (str) => {
  let num1 = parseInt(str.split(' ')[0], 10);
  let num2 = parseInt(str.split(' ')[1], 10);

  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }

    return findGcd(`${num1} ${num2}`);
  }

  return num1 + num2;
};

const generateQnA = () => {
  const question = generatePair();
  const answer = findGcd(question);
  return cons(question, answer);
};

const askForGcd = () => {
  const descr = 'Find the greatest common divisor of given numbers.';
  const response = () => generateQnA();
  gameCore(descr, response);
};

export default askForGcd;
