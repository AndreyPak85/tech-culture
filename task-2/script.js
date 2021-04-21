/**
 * @author Andrey P
 * Переменная lang может принимать 2 значения: 'ru' 'en'.
 *  Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
 * через if,
 * через switch-case
 * через многомерный массив без ифов и switch.
 */

let langs = ['ru', 'en'];
let lang = langs[0];

if (lang === 'ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
}
else {
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
}

switch (lang) {
    case 'ru': {
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресенье');
        break;
    }
    case 'en': {
        console.log('Monday');
        console.log('Tuesday');
        console.log('Wednesday');
        console.log('Thursday');
        console.log('Friday');
        console.log('Saturday');
        console.log('Sunday');
        break;
    }
}

let weeksDay = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
                ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']]

console.log(weeksDay[langs.indexOf(lang)])

// ================================================= //

/**
 * @author Andrey P
 * У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
 * Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
 * Создать свой репозиторий на GitHub и поместить туда папку с усложненным заданием
 */

const persons = ['Артем', 'Максим'];
let namePerson = 'Артем';

let position = namePerson === persons[0] ? 'Директор' : namePerson === persons[1] ? 'преподаватель' : 'студент' ;

console.log(position);