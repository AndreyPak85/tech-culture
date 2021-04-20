//Option #1

const nums3 = [3,1,2,10,1];
const nums1 = [1,2,3,4];
const nums2 = [1,1,1,1,1];

const runningSum = (arr) => {
    const newArr = [];
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
