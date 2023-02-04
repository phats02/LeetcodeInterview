/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map={}
    for (var i=0;i<s.length;i++){
        if (map.hasOwnProperty(s[i])){
            map[s[i]]++
        }
        else map[s[i]]=1
    }
    console.log(map)
    for (var i=0;i<t.length;i++){
        if (!map.hasOwnProperty(t[i])){
            return false;
        }
        else{
            if (map[t[i]]==0) return false;
            map[t[i]]--
        }
    }
    for (const property in map){
        if (map[property] !=0) return false
    }
    return true
};