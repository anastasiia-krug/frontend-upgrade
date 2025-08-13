console.log('Задание 1');

function getDateFormat(date, separator) {
    const dateOfTheMonth = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${dateOfTheMonth}${separator}${month}${separator}${year}`;
}

const dateNow = new Date();
console.log('Текущая дата: ', getDateFormat(dateNow, '.'));


console.log('Задание 2');

function getDaysBeforeBirthday(nextBirthdayDate) {
    return convertMsToDays(nextBirthdayDate.getTime() - Date.now());
}

function convertMsToDays(timestamp) {
    return Math.round(timestamp / 1000 / 60 / 60 / 24);
}

const nextBirthdayDate = new Date(2025, 10, 3);
console.log(`${getDaysBeforeBirthday(nextBirthdayDate)} дней осталось до Вашего дня рождения!`);


console.log('Задание 3');

function addDays(date, days) {
    return new Date(date.getTime() + convertDaysToMs(days));
}

function convertDaysToMs(daysNumber) {
    return Math.round(daysNumber * 24 * 60 * 60 * 1000);
}

const currentDate = new Date();
console.log(`Сегодня ${getDateFormat(currentDate, '-')}, через 180 дней будет ${getDateFormat(addDays(currentDate, 180), '-')}`);
