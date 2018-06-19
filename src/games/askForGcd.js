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

const askForGcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  console.log('\n');
  const question = () => generatePair();
  const correctAnswer = () => arg => findGcd(arg);
  gameCore(question, correctAnswer);
};

export default askForGcd;
