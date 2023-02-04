/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var isNegative=false
    var result=0
    for (var i=0;i<s.length;i++){
        //step 1:
        if (s[i]===' ') continue
        //step 2:
        if (s[i]==='+' || s[i]==='-'){
            if (s[i]==='-') isNegative=true
            if (i<s.length-1 &&!(s[i+1]>='0' && s[i+1]<='9')) return 0
            continue
        }
        
        //step 3:
        if (s[i]>='0' && s[i]<='9'){
            result=result*10+parseInt(s[i])
            if (i<s.length-1 &&!(s[i+1]>='0' && s[i+1]<='9')) break
            continue
        }
        //breakpoint
        if (/\D/.test(s[i])){
            console.log(1)
            break
        }
    }
    if (isNegative){
        result=-Math.min(result,2**31)
    }
    else{
        result=Math.min(result,2**31-1)
    }
    return result
};