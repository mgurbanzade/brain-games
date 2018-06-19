import { generateNumber, gameCore } from '..';

const isEven = n => n % 2 === 0;
const numberLimit = 1000;

const askForEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('\n');
  const question = () => generateNumber(numberLimit);
  const correctAnswer = () => arg => isEven(arg) ? 'yes' : 'no'; // eslint-disable-line no-confusing-arrow
  gameCore(question, correctAnswer);
};

export default askForEven;
