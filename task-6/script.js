/**
 * @author Andrey P
 * Используя только файл скрипта (html руками не трогать) выполнить такие действия:
 * Восстановить порядок книг.
 * Заменить картинку заднего фона на другую из папки image
 * Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
 * Удалить рекламу со страницы
 * Восстановить порядок глав во второй и пятой книге
 * в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
 * 
 */

const books = document.querySelectorAll(".book");
// Восстановить порядок книг
document.querySelector(".books").append(books[1]);
document.querySelector(".books").append(books[0]);
document.querySelector(".books").append(books[4]);
document.querySelector(".books").append(books[3]);
document.querySelector(".books").append(books[5]);
document.querySelector(".books").append(books[2]);


// изменяем фоновую картинку
document.body.style.backgroundImage="url(./image/you-dont-know-js.jpg)"

// Изменить заголовок в книге 3
books.forEach((book) => {
    let title = book.innerText.slice(0, 7).toLowerCase();
    if (title.includes('книга 3')) {
        book.childNodes[1].childNodes[1].textContent = "Книга 3. this и Прототипы Объектов";
    }
})

// Удалить рекламу со страницы
document.querySelector(".adv").remove()

// Восстановить порядок глав во второй и пятой книге 
const title2List = books[0].querySelectorAll('li');
const title2Ul = books[0].querySelector('ul');
title2Ul.append(title2List[0]);
title2Ul.append(title2List[1]);
title2Ul.append(title2List[3]);
title2Ul.append(title2List[6]);
title2Ul.append(title2List[8]);
title2Ul.append(title2List[4]);
title2Ul.append(title2List[5]);
title2Ul.append(title2List[7]);
title2Ul.append(title2List[9]);
title2Ul.append(title2List[2]);
title2Ul.append(title2List[10]);

const title5List = books[5].querySelectorAll('li');
const title5Ul = books[5].querySelector('ul');
title5Ul.append(title5List[0])
title5Ul.append(title5List[1])
title5Ul.append(title5List[9])
title5Ul.append(title5List[3])
title5Ul.append(title5List[4])
title5Ul.append(title5List[2])
title5Ul.append(title5List[6])
title5Ul.append(title5List[7])
title5Ul.append(title5List[5])
title5Ul.append(title5List[8])
title5Ul.append(title5List[10])

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
title6List = books[2].querySelectorAll("li");
let li8 = document.createElement('li');
li8.innerHTML = 'Глава 8: За пределами ES6';
title6List[8].append(li8);
// title6List[8].innerHTML += '<li>Глава 8: За пределами ES6</li>'


books.forEach((book) => {
    console.log(book.childNodes[1].childNodes[1].innerText.slice(0, 7));
})


Array(books).sort(function(a, b) {
    x = a.childNodes[1].childNodes[1].innerText.slice(0, 7);
    y = b.childNodes[1].childNodes[1].innerText.slice(0, 7);
    if (x<b) {
        return -1;
    }
    if(x>b) {
        return 1
    }
    return 0;
})




// let newArr = []

// arr = ['1', '2', '5', '9', '4', '3']
// Array(arr).sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });
// console.log(arr.sort());

// books.forEach((book) => {
//     newArr.push(book)
// })

// Array(newArr).sort(function (a, b) {
//     if (a.innerText < b.innerText) {
//         return -1;
//     }
//     if (a.innerText> b.innerText) {
//         return 1;
//     }
//     return 0;
// }) 

// console.log(newArr.sort())


// function sortingByName() {
//     var items = document.querySelectorAll('.item');
  
//     // get all items as an array and call the sort method
//     Array.from(items).sort(function(a, b) {
//       // get the text content
//       a = a.querySelector('.item-name').innerText.toLowerCase()
//       b = b.querySelector('.item-name').innerText.toLowerCase()
//       return (a > b) - (a < b)
//     }).forEach(function(n, i) {
//       n.style.order = i
//     })
  
//   }