console.log('Задание 1');

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const onlineUsers = users.filter(user => user.status === 'online');
const usersOnlineNames = onlineUsers.map(onlineUser => onlineUser.username).join(', ');

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


console.log('Задание 2');

function giveTalonsInOrder(patients, orders) {
    return orders.map(order => {
        return { id: order, name: patients[order - 1].name };
    });
}

const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);


console.log('Задание 3');

function handleObject(obj, key, action) {
    if (action === 'get') {
        
        return obj[key];
    }

    if (action === 'add') {
        obj[key] = '';

        return obj;
    }

    if (action === 'delete') {
        delete obj[key];

        return obj;
    }

    return obj;
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const resultHandleObject = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', resultHandleObject); // { name: 'Maxim' }


console.log('Задание 4');

function giveJobToStudent(student, jobName) {
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    return {
        ...student,
        job: jobName,
    };
}

const studentInfo = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudentInfo = giveJobToStudent(studentInfo, 'веб-разработчик');
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/


console.log('Задание 5');

function sum(...numbers) {
    return numbers.reduce((sum, number) => { 
        return sum + number 
    }, 0);
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773
