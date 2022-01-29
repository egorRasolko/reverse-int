module.exports = function reverse (n) {
    let num = Math.abs(n);
    let str = num.toString();
    let newstr = ' ';
    for(let i = 0; i < str.length; i++) {
        newstr = str[i] + newstr;
    }
    return Number(newstr)
}
