/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map={}
    var result=0
    var count=0
    for (var i=0;i<s.length;i++){
        if (map.hasOwnProperty(s[i])){
            result=Math.max(count,result)
            count=i-map[s[i]]
            map[s[i]]=i
            for (var property in map){
                if (map[property]<i-count){
                    delete map[property]
                }
            }
        }
        else{
            map[s[i]]=i
            count++
        }
    }
    result=Math.max(count,result)
    return result
};