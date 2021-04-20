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

const persons = ['Артем', 'Максим'];
let namePerson = 'Артем';

let position = namePerson === persons[0] ? 'Директор' : namePerson === persons[1] ? 'преподаватель' : 'студент' ;

console.log(position);