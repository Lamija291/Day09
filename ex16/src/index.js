function checkSign(num) {
    return (num === 10) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;
