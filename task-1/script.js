/**
 * @author Andrey P
 * Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
 * 1) Создать переменную num со значением 266219· Вывести в консоль произведение (умножение) цифр этого числа
 * 2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)· Вывести на экран первые 2 цифры полученного числа
 * 3) Создать свой репозиторий на GitHub и поместить туда папку с усложненным заданием
 */


const num = 266219;
const arr = num.toString().split('');
let total = 1;

for (let i=0; i<arr.length; i++) {
    total *= +arr[i]
}
console.log(total);

total **=3
console.log(`Возвести в степень 3 = ${total.toString().slice(0,2)}`)