import { generateNumber, gameCore } from '..';

const numberLimit = 10;

const generateExpression = (num) => {
  const operator = num > 6.66 ? '*' : num > 3.33 && num < 6.66 ? '-' : '+'; // eslint-disable-line no-nested-ternary
  const randNum1 = generateNumber(numberLimit);
  const randNum2 = generateNumber(numberLimit);

  return `${randNum1} ${operator} ${randNum2}`;
};

const askForCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('\n');
  const question = () => generateExpression(generateNumber(numberLimit));
  const correctAnswer = () => arg => eval(arg); // eslint-disable-line no-eval
  gameCore(question, correctAnswer);
};

export default askForCalc;
