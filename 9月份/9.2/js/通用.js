function repairZero(num) {
    //一个函数智能return一次，遇到return就到此为止
    return num < 10 ? ('0' + num) : num
    console.log(2); //不会执行
}

function leapYear(year) {
    let result = (year % 4 === 0 && year % 100 != 0) || year % 400 === 0
    return result
}

function l(str) {
    console.log(str);
}

function reverseStr(str) {
    //利用数组来翻转字符串
    return (str.split('').reverse().join(''));
}