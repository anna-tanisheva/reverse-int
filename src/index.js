module.exports = function reverse(n) {
    let numberArrReversed = String(n).split('').reverse();
    if (numberArrReversed[0] !== '0' && numberArrReversed[numberArrReversed.length - 1] !== '-') {
        return Number(numberArrReversed.join(''));
    } else if (numberArrReversed[0] === '0') {
        numberArrReversed.shift();
        return Number(numberArrReversed.join(''))
    } else if (numberArrReversed[numberArrReversed.length - 1] === '-') {
        numberArrReversed.pop();
        return Number(numberArrReversed.join(''))
    }
}
