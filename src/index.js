import readlineSync from 'readline-sync';

const isEven = n => /^-?\d*[02468]$/.test(n);
const print = input => console.log(input);
const emptyLine = () => print('\n');
const greetingMessage = () => print('Welcome to the Brain Games!');

const askPlayerName = () => {
  greetingMessage();
  const playerName = readlineSync.question('May I have your name? ');
  print(`Hello, ${playerName}!`);
  emptyLine();
  return playerName;
};

const askForEven = () => {
  greetingMessage();
  print('Answer "yes" if number even otherwise answer "no".');
  let playerScore = 0;
  emptyLine();
  const playerName = askPlayerName();

  const loop = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const correctAnswer = isEven(randomNumber) ? 'Yes' : 'No';
    print(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      playerScore += 1;
      print('Correct!');

      if (playerScore < 3) return loop();
      return print(`Congratulations, ${playerName}!`);
    }

    print(`${playerAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
    return print(`Let's try again, ${playerName}!`);
  };

  return loop();
};

export { askPlayerName, askForEven };
