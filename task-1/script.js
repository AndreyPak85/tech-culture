const num = 266219;
const arr = num.toString().split('');
let total = 1;
let res = 1;

for (let i=0; i<arr.length; i++) {
    total *= +arr[i]
}

console.log(total);

total **=3
console.log(`Возвести в степень 3 = ${total}`)