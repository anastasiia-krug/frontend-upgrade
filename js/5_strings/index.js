// Задание 1

console.log('Задание 1');

const myName = 'Анастасия';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'мне интересно изучать веб-разработку и хочется научиться создавать полноценные веб-приложения, владеть навыками как в направлении frontend, так и в backend\'е, помимо этого, в сфере веб-разработки достаточно много вакансий с высоким уровнем зп, и есть перспектива развиваться как специалисту';
const numberOfMonth = 3;

const result = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;
console.log(result);

// Задание 2

console.log('Задание 2');

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

//1
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toLowerCase());

//2
const course = 'курс';
myInfoText = myInfoText.replaceAll(course, course.toUpperCase());

//3
console.log(myInfoText);

//4
console.log(myInfoText.length);

//5
console.log(`Первый символ строки: '${myInfoText[0]}', последний символ: '${myInfoText[myInfoText.length - 1]}'.`);


// Задание 3

console.log('Задание 3');

const userName = prompt('Как вас зовут?');
const userNameFormatted = userName.trim().toUpperCase();

alert(`Вас зовут ${userNameFormatted}`);


// Задание 4

console.log('Задание 4');

const userAge = prompt('Сколько вам лет?');
const userAgeFormatted = Number(userAge.trim());

alert(`Вас зовут ${userNameFormatted} и вам ${userAgeFormatted} лет`);


// Задание 5

console.log('Задание 5');

const userString = prompt('Введите текст для обрезки');
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки').trim());
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки').trim());

const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);


// Задание 6

console.log('Задание 6');

const userText = prompt('Введите текст').trim();
const fragmentOfText = prompt('Введите слово из текста').trim();

const indexOfFragment = userText.indexOf(fragmentOfText);
const slicedString = userText.slice(0, indexOfFragment);

alert(`Результат: ${slicedString}`);
