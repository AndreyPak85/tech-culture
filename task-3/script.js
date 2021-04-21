function checkString(s) {

    if (typeof(s) !== 'string') {
        return 'Аргумент не строка, ведите строку'
    }
    s = s.trim();
    if ( s.length > 30) {
        let newS = s.slice(0, 30)
        return `${newS}...`
    }
    return s;
}

console.log(checkString('   abc    '))

console.log(checkString(3))
console.log(checkString(' 1111111111222222222233333333330000000000'))

