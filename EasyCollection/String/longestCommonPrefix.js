/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result=strs[0]
    for (var i=1;i<strs.length;i++){
        for (var j=0;j<result.length;j++){
            if (result[j]!=strs[i][j]){
                result=result.slice(0,j)
            }
        }
    }
    return result;
};