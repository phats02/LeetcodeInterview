/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var remainder=0;
    
    var tempNum=digits[digits.length-1]+1+remainder
    digits[digits.length-1]=(tempNum)%10
    remainder=Math.floor((tempNum)/10)
    
    for (var i=digits.length-2;i>=0;i--){
        tempNum=digits[i]+remainder
        digits[i]=(tempNum)%10
        remainder=Math.floor((tempNum)/10)
        if (remainder==0){
            break
        }
    }
    
    if (remainder !=0){
        digits.unshift(1)
    }
    return digits
};