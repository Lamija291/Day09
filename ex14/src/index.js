function myForLoop1() {
    var evenNumbers = "0, 2, 4, 6, 8";
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = "8, 6, 4, 2, 0"; {
        for (var i = 0; i < 8; i++);
        console.log(i);
    }
    return evenInverseNumbers;
}
module.exports = {
    myForLoop1,
    myForLoop2
};