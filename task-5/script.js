/**
 * @author Andrey P
 * Необходимо выполнить в отдельном js файле, подключенному к 
 * 1) Создать массив week и записать в него дни недели в виде строк
 * - Вывести на экран все дни недели
 * - Каждый из них с новой строчки
 * - Выходные дни - курсивом 
 * - Текущий день - жирным шрифтом(использовать объект даты)
 * 2) Добавить папку с усложненным заданием в свой репозиторий на GitHub
 */

const week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const today = new Date();
const ul = document.querySelector("#days")
let html = '';
let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long"  
});
let weekDay = formatter.format(today)

week.forEach((day) => {
    if (day.toLowerCase() === weekDay) {
        html += `
            <li>${day.bold()} </li>
        `
    }
    else if (day.toLowerCase() === 'суббота' || day.toLowerCase() === 'воскресенье') {   
        html += `
            <li>${day.italics()}</li>
        `
        ul.innerHTML = html
    }
    else {
        html += `
            <li>${day}</li>
        `
    }   
})