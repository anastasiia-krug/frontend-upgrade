// Задание 1

console.log('Задание 1');

let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
debugger;

if (health <= 0 || !health) {
    debugger;

    alert('Параметр "здоровье" должен быть больше нуля!');
} else {
    alert(`Параметр "здоровье" равен ${ health }`);
}


// Задание 2

console.log('Задание 2');

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
debugger;

if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
debugger;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);


// Задание 3

console.log('Задание 3');

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);


// Задание 4

console.log('Задание 4');

let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3;
    console.log(numbers[i]);
} 
console.log(sum); 

// Через цикл for of
sum = 0;
for (let num of numbers){
    sum += num ** 3;
    console.log(num);
} 
console.log(sum); 
