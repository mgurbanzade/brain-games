import readlineSync from 'readline-sync';

const generateNumber = limit => Math.floor(Math.random() * limit);
const askForAnything = question => readlineSync.question(question);
const playerMaxScore = 3;

const gameCore = (q, ca) => {
  const playerName = askForAnything('May I have your name? ');
  let playerScore = 0;

  const loop = () => {
    const question = q();
    const correctAnswer = ca()(question);
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
