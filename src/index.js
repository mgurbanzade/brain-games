const readlineSync = require('readline-sync');

const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default askPlayerName;
