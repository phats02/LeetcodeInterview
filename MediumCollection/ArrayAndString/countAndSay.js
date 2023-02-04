/**
 * @param {number} n
 * @return {string}
 */
function pairDigit(str){
    var listPairDigit=[]
    var currentDigit=str[0]
    var count=1
    for (var i=1;i<str.length;i++){
        if (str[i]!=currentDigit){
            listPairDigit.push([count,currentDigit])
            count=1
            currentDigit=str[i]
        }
        else count++
    }
    listPairDigit.push([count,currentDigit])
    return listPairDigit
}
function pairDigitToString(pairList){
    var result=""
    for (var i=0;i<pairList.length;i++){
        result+=String(pairList[i][0])+pairList[i][1]
    }
    return result
}
var countAndSay = function(n) {
    if (n==1) return "1"
    else return pairDigitToString(pairDigit(countAndSay(n-1)))
};