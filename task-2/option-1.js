function findRichest(arr) {
    const newArr = [];
    for (let i=0; i<arr.length; i++){
        let sum=0;
        for (let j=0; j<arr[i].length; j++) {
            sum += arr[i][j];
        }
        newArr.push(sum);
        sum=0;
    }
    return Math.max(...newArr)
}

const accounts1 = [[1,2,3], [3,2,1]];
const accounts2 = [[1,5], [7,3], [3,5]];
const accounts3 = [[2,8,7], [7,1,3], [1,9,5]];

console.log(findRichest(accounts1))
console.log(findRichest(accounts2))
console.log(findRichest(accounts3))
