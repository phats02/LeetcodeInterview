/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length<2) return s
    var result=s[0]
    for (var i=1;i<s.length;i++){
        //even string
        var l_even=i-1
        var r_even=i
        while (l_even>=0 && r_even<s.length && s[r_even]==s[l_even]){
            if (s[l_even]==s[r_even] && result.length<r_even-l_even+1){
                result=s.slice(l_even,r_even+1)
            }
            l_even--
            r_even++
        }
        //odd string
        var l_odd=i
        var r_odd=i
        while (l_odd>=0 && r_odd<s.length && s[l_odd]==s[r_odd]){
            if (result.length<r_odd-l_odd+1){
                result=s.slice(l_odd,r_odd+1)
            }
            l_odd--
            r_odd++
        }
    }
    return result
};