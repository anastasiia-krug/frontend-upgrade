console.log('Задание 1');

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++;

        if (this.level === 2) {
            this.stack.push('CSS');
        }

        if (this.level === 3) {
            this.stack.push('JavaScript');
        }

        if (this.level === 4) {
            this.stack.push('React');
        }

        if (this.level === 5) {
            this.stack.push('NodeJS');
        }

        if (this.level > 5) {
            alert('Студент выучил все технологии!');
        }

        return this;
    }
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();


console.log('Задание 2');

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {

    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    return {
        ...this,
        isDomestic
    };
}

makeDomestic.bind(dog, true)();
// Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

makeDomestic.call(bird, false);
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

makeDomestic.apply(bird, [false]);
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"


console.log('Задание 3');

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack();
score.call(footballer, 'Сиииии');
substitute.apply(footballer, ['Paulo Dibala']);
