console.log('Задание 1');

function giveParcel(queue) {
    const removedFromQueue = queue.shift();
    alert(`${removedFromQueue} получил(а) посылку. В очереди осталось ${queue.length} человек.`);
}

function leaveQueueWithoutParcel(queue) {
    const removedFromQueue = queue.pop();
    alert(`${removedFromQueue} не получил(а) посылку и ушел(ла) из очереди`);
}

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

giveParcel(peopleWaiting); // Кристина
giveParcel(peopleWaiting); // Олег
giveParcel(peopleWaiting); // Кирилл

while (peopleWaiting.length) {
    leaveQueueWithoutParcel(peopleWaiting);
} // Глеб, Артем, Светлана, Мария


console.log('Задание 2');

function getSumOfSequence(number) {
    let numbers = [];

    for (let i = 1; i <= number; i++) {
        numbers.push(i);
    }

    return numbers[0] + numbers[numbers.length - 1];
}

console.log(getSumOfSequence(5));


console.log('Задание 3');

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию: ').trim();
const coffeeNameFindIndex = coffees.findIndex(coffee => coffee.toLocaleLowerCase() === coffeeName.toLocaleLowerCase());

if (coffeeNameFindIndex === -1) {

    alert('К сожалению, такого вида кофе нет в наличии');
} else {

    alert(`Держите ваш любимый кофе ${coffees[coffeeNameFindIndex]}. Он ${coffeeNameFindIndex + 1}-й по популярности в нашей кофейне.`);
}


console.log('Задание 4');

const prices = [1.5, 1, 2];

const updatedPrices = prices.map(price => price * (1 + 0.5));

updatedPrices.forEach((price, index) => {
    alert(`Кофе ${coffees[index]} сейчас стоит ${price} евро`);
});


console.log('Задание 5');

function askClientToGiveEstimation(clientsEstimations) {
    const clientEstimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));

    if (typeof clientEstimation === 'number' && !isNaN(clientEstimation) &&
        clientEstimation >= 1 && clientEstimation <= 10) {

        clientsEstimations.push(clientEstimation);
    }
}

let clientsEstimations = [];

for (let i = 0; i < 5; ++i) {
    askClientToGiveEstimation(clientsEstimations);
}

const goodEstimations = clientsEstimations.filter(estimation => estimation > 5);
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5);

alert(`Всего положительных оценок: ${goodEstimations.length}`);
alert(`Всего отрицательных оценок: ${notGoodEstimations.length}`);


console.log('Задание 6');

const numbers = [10, 4, 100, -5, 54, 2];

let sumOfTheCubesOfNumbers1 = 0;

for (let i = 0; i < numbers.length; i++) {
    sumOfTheCubesOfNumbers1 += numbers[i] ** 3;
}

console.log('Цикл for ', sumOfTheCubesOfNumbers1);


let sumOfTheCubesOfNumbers2 = 0;

for (let number of numbers) {
    sumOfTheCubesOfNumbers2 += number ** 3;
}

console.log('Через цикл for...of ', sumOfTheCubesOfNumbers2);


let sumOfTheCubesOfNumbers3 = 0;

numbers.forEach(number => sumOfTheCubesOfNumbers3 += number ** 3);

console.log('Через метод forEach() ', sumOfTheCubesOfNumbers3);


const sumOfTheCubesOfNumbers4 = numbers.reduce((acc, number) => {
    return acc += number ** 3;
}, 0);

console.log('Через метод reduce() ', sumOfTheCubesOfNumbers4);
