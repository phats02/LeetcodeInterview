/**
 * @param {string} s
 * @return {boolean}
 */
function reverse(s){
    return s.split("").reverse().join("");
}
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^\da-z]/g, "")
    console.log(s)
    return s==reverse(s)
};