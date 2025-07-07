// Задание 1

console.log('Задание 1');

let age = 23;
console.log(Number(age), Boolean(age), String(age));

let verificationCode = 12345678901234567890n;
console.log(Number(verificationCode), Boolean(verificationCode), String(verificationCode));

let userName = 'anastasiya-krug';
console.log(Number(userName), Boolean(userName), String(userName));

let isVerified = true;
console.log(Number(isVerified), Boolean(isVerified), String(isVerified));

let cart = undefined;
console.log(Number(cart), Boolean(cart), String(cart));

let savedItems = null;
console.log(Number(savedItems), Boolean(savedItems), String(savedItems));

let userId = Symbol('id');
console.log(Boolean(userId), String(userId));

let user = {
    id: userId,
    userName: userName,
    age: age,
    verificationCode: verificationCode,
    isVerified: isVerified,
    cart: cart,
    savedItems: savedItems,
}
console.log(Number(user), Boolean(userName), String(user));


// Задание 2

console.log('Задание 2');

//1
console.log(+'50', typeof +'50'); // неявное 
console.log(Number('50'), typeof Number('50')); // явное
//2
console.log(Number('100'), typeof Number('100')); // явное
//3
console.log('' + 1, typeof ('' + 1)); // неявное 
console.log(String(1), typeof String(1)); // явное
//4
console.log(String(1), typeof String(1)); // явное
//5
console.log(Boolean(0), typeof Boolean(0)); // явное
//6
console.log(+'001', typeof +'001'); // неявное 
console.log(Number('001'), typeof Number('001')); // явное
//7
console.log(1 + '', typeof (1 + '')); // неявное 
console.log(String(1), typeof String(1)); // явное
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String(001), typeof String(001)); // явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное


// Задание 3

console.log('Задание 3');

//1
console.log(Number(console.log), Boolean(console.log), String(console.log));
//2
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }));
//3
console.log(Boolean(Symbol('key')), String(Symbol('key')));
//4
console.log(Number(Number), Boolean(Number), String(Number));
//5
console.log(Number(''), Boolean(''), String(''));
//6
console.log(Number(0), Boolean(0), String(0));
//7
console.log(Number(-10), Boolean(-10), String(-10));
//8
console.log(Number('-105'), Boolean('-105'), String('-105'));


// Задание 4

console.log('Задание 4');

// 1
console.log(Number(' 1 2 3 4 5'));
// 2
console.log(Number('1234 5'));
// 3
console.log(Number('12345'));
// 4
console.log(String(false));
// 5
console.log(Boolean(0000000));
// 6
console.log(Boolean(0.0000001));
// 7
console.log(String(undefined));
// 8
console.log(Number('100f'));
// 9
console.log(Number('100'));
// 10
console.log(Number('000001'));
