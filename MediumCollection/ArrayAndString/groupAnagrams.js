/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let sortString = (stringg) => {
    return stringg.split("").sort().join("");
  };
  var groupAnagrams = function(strs) {
      var result=[]
      var mapSaveAnagrams={}
      var index=0
      for (var i=0;i<strs.length;i++){
          var sortedStr=sortString(strs[i])
          if (mapSaveAnagrams.hasOwnProperty(sortedStr)){
              result[mapSaveAnagrams[sortedStr]].push(strs[i])
          }
          else{
              mapSaveAnagrams[sortedStr]=index++
              result.push([strs[i]])
          }
      }
      return result
  };