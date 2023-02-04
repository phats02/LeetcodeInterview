/**
 * @param {number} x
 * @return {number}
 */
var reverseString = function(s) {
    for (var i=0;i<s.length/2;i++){
        [s[i],s[s.length-1-i]]=[s[s.length-1-i],s[i]]
    }
};
var reverse = function(x) {
    var isNegative=false
    if (x<0){
        isNegative=true
        x=-x
    }
    var arrOfDigit=Array.from(String(x),Number)
    reverseString(arrOfDigit)
    var result=arrOfDigit.reduce(function (accum, digit) {
        return (accum * 10) + digit
    }, 0);
    if (result>2**31-1) return 0
    if (isNegative) result=-result
    return result
};