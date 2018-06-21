import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playerMaxScore = 3;

const gameCore = (description, response) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('\n');
  const playerName = readlineSync.question('May I have your name? ');

  for (let i = 0; i < playerMaxScore; i += 1) {
    const result = response();
    const question = car(result);
    const correctAnswer = cdr(result);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== String(correctAnswer)) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }

    console.log('Correct!');
    if (i + 1 === playerMaxScore) console.log(`Congratulations, ${playerName}!`);
  }
};

export default gameCore;
