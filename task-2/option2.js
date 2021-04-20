let nums1 = [1,2,3,4];
let nums2 = [1,1,1,1,1];
let nums3 = [3,1,2,10,1];

let sum = 0;

function sumArr(arr) {
    let sum = 0;
    return function() {
        return arr.map((i) => sum += i)
    }
}

const runningSum1 = sumArr(nums1)
console.log(runningSum1());

const runningSum2 = sumArr(nums2)
console.log(runningSum2())

const runningSum3 = sumArr(nums3)
console.log(runningSum3())



