import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const generateNumber = limit => Math.floor(Math.random() * limit);
const askForAnything = question => readlineSync.question(question);
const playerMaxScore = 3;

const gameCore = (descr, response) => {
  console.log('Welcome to the Brain Games!');
  console.log(descr);
  console.log('\n');
  const playerName = askForAnything('May I have your name? ');
  let playerScore = 0;

  const loop = () => {
    const result = response();
    const question = car(result);
    const correctAnswer = cdr(result);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === String(correctAnswer)) {
      playerScore += 1;
      console.log('Correct!');

      if (playerScore < playerMaxScore) return loop();
      return console.log(`Congratulations, ${playerName}!`);
    }

    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${playerName}!`);
  };

  loop();
};

export { generateNumber, gameCore, askForAnything };
