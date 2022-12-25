const MAX = 100;
const MIN = 0;
const ATTEMPTS_NUMBER = 10;

function getPlayerName() {
    return prompt('Как тебя зовут ?', '');
    // Область видимости функции - Закрытая, поэтому и нет конфликта в наименовании переменных в стр.6 и стр.11
}

const playerName = getPlayerName();
//console.log(name);

const getRandomNumber = () => {
    return Math.round(Math.random() * 100);
};

const number = getRandomNumber();
console.log(playerName, number);

const game = (max, min, attemptsNumber, name, randomNumber) => {
    alert(`Привет, ${name} ! 
    Я загадал число в диапазоне от ${min} до ${max}.
    У тебя есть ${attemptsNumber} попыток, чтобы угадать загаданное мной число`);
    for (let i = 0; i < 10; i++) {
        const playerAnswer = prompt('Какое число я загадал ?', '');
        if (playerAnswer > randomNumber) {
            alert('Моё число меньше !');
        } else if (playerAnswer < randomNumber) {
            alert('Моё число больше !');
        } else {
            alert('Ты угадал число !!!');
            alert('Буду рад видеть тебя снова !!!');
            return;
        }
    }
    alert(`${name}, дружище, ты НЕ СПРАВИЛСЯ с заданием за ${attemptsNumber} попыток.`);
    alert('Не грусти и пробуй снова !!!');
};

game(MAX, MIN, ATTEMPTS_NUMBER, playerName, number);