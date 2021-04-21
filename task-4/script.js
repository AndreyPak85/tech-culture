const arr = ['1', '3', '5', '4', '2', '22', '11'];

for (let i=0; i<arr.length; i++) {
    if ( arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i])
    }
}

// ==================================== //

function isSimple (n) {
    if (n <= 1) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
        return n;
}

for (let i=0; i<101; i++) {
    if (isSimple(i)){
        console.log(`${i} - Делители этого числа: 1 и ${i}`);
    }
}
