/**
 * @param {string} s
 * @return {number}
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  var firstUniqChar = function(s) {
      var map={}
      for (var i=0;i<s.length;i++){
          if (map.hasOwnProperty(s[i])){
              map[s[i]]++
          }
          else {
              map[s[i]]=1
          }
      }
      return s.indexOf(getKeyByValue(map,1))
  };