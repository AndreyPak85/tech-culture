//Option #1

let nums1 = [1,2,3,4];
let nums2 = [1,1,1,1,1];
let nums3 = [3,1,2,10,1];

let runningSum = (arr) => {
    let newArr = [];
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }
    return newArr;
}

console.log(runningSum(nums1));
console.log(runningSum(nums2));
console.log(runningSum(nums3));
