// Задание 1

const age = 23;
const verificationCode = 12345678901234567890n;
const userName = 'anastasiya-krug';
const isVerified = true;
const cart = undefined;
const savedItems = null;
const userId = Symbol('id');

const user = {
    id: userId,
    userName: userName,
    age: age,
    verificationCode: verificationCode,
    isVerified: isVerified,
    cart: cart,
    savedItems: savedItems,
}

console.log('age', age, typeof age);
console.log('verification code', verificationCode, typeof verificationCode);
console.log('username', userName, typeof userName);
console.log('verified', isVerified, typeof isVerified);
console.log('cart', cart, typeof cart);
console.log('saved items', savedItems, typeof savedItems);
console.log('id', userId, typeof userId);
console.log('user', user, typeof user);


// Задание 2

let productCode = 12345;
productCode = '12345';
alert(productCode);

let productId = '18;'
productId = 18;
alert(productId);

let isAvailable = true;
isAvailable = null;
alert(isAvailable);


// Задание 3

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

console.log('var является устаревшим');
let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
