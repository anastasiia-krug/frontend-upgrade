// Задание 1

console.log('Задание 1');

function getName1(name) {

    return `Имя равно ${name}`;
}

const getName2 = function (name) {
    return `Имя равно ${name}`;
};

const getName3 = name => `Имя равно ${name}`;

console.log(getName1('Анастасия'));
console.log(getName2('Константин'));
console.log(getName3('Ольга'));


// Задание 2

console.log('Задание 2');

function getSumOfNumbers(number, type = 'odd') {

    if (typeof number === 'number' && !isNaN(number)) {

        let sum = 0;

        if (type === 'odd') {
            for (let i = 1; i <= number; i += 2) {
                sum += i;
            }
        } else if (type === 'even') {
            for (let i = 0; i <= number; i += 2) {
                sum += i;
            }
        } else {
            for (let i = 0; i <= number; i += 1) {
                sum += i;
            }
        }

        return sum;
    } else {

        return NaN;
    }
}

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
console.log(getSumOfNumbers(true, "odd")); // NaN


// Задание 3

console.log('Задание 3');

function getDivisorsCount(number) {
    if (typeof number === 'number' && !isNaN(number)) {

        if (number <= 0 || !Number.isInteger(number)) {
            alert(`${number} должен быть целым числом и больше нуля!`);
        }

        let dividersCount = 0;

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                dividersCount++;
            }
        }

        return dividersCount;
    } else {

        return NaN;
    }
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
