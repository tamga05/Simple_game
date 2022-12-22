const MAX = 100;
const MIN = 0;
const ATTEMPTS_NUMBER = 10;

function getPlayerName() {
    const playerName = prompt('Как тебя зовут ?', '');
    return playerName;
}

const name = getPlayerName();
//console.log(name);