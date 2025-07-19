// Задание 1

console.log('Задание 1');

const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

if ((userLogin === existingUserLogin) && (userPassword === existingUserPassword)) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}


// Задание 2

console.log('Задание 2');

const correctAnswers = [4, 4, 1, 12, 6];
const questions = [
    'Сколько будет 2 + 2?',
    'Сколько будет 2 * 2?',
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
    'Сколько будет 2 + 2 * 2?'
];

let userAnswers = [];
let correctAnswersNumber = 0;
let incorrectAnswersNumber = 0;

for (let i = 0; i < correctAnswers.length; i++) {
    userAnswers.push(Number(prompt(`${i + 1}. ${questions[i]}`)));

    if (userAnswers[i] === correctAnswers[i]) {
        alert('Ответ Верный');
        correctAnswersNumber++;
    } else {
        alert('Ответ Неверный');
        incorrectAnswersNumber++;
    }
}

alert(`Конец теста! Правильные ответы — ${correctAnswersNumber}; Неправильные ответы — ${incorrectAnswersNumber}.`);


// Задание 3

console.log('Задание 3');

const correctConfirmAnswers = [true, true, false];
const correctJsAnswers = [
    'JavaScript появился в 1995 году',
    'Спецификация JavaScript называется ECMAScript',
    'JavaScript был создан за 10 дней'
];
const questionsJs = [
    'JavaScript появился в 1995 году?',
    'Спецификация JavaScript называется ECMAScript?',
    'JavaScript был создан за 1 месяц?'
];

let userJsAnswers = [];

for (let i = 0; i < correctConfirmAnswers.length; i++) {
    userJsAnswers.push(confirm(`${i + 1}. ${questionsJs[i]}`));

    if (userJsAnswers[i] === correctConfirmAnswers[i]) {
        alert('Верно');
    } else {
        alert(`Правильный ответ: ${correctJsAnswers[i]}`);
    }
}


// Задание 4

console.log('Задание 4');

// for
for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
}

// while
let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    i += 1;
}

// do while
let j = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    j += 1;
} while (j < 3);


// Задание 5

console.log('Задание 5');

sum = 0;

for(let i = 0; i <= 100; i++) {
    sum += i;
}

alert(sum);
