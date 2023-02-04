/**
 * @param {number[]} nums
 * @return {number}
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  var singleNumber = function(nums) {
      let map={}
      //O (n): time complexity O(n): space complexity
      // for (var i=0;i<nums.length;i++){
      //     if (map[nums[i]]) map[nums[i]]=false
      //     else map[nums[i]]=true
      // }
      // return getKeyByValue(map,true)
      //O(n): time complexity O(1): space complexity
      var xor=0
      for (var i=0;i<nums.length;i++)
          xor^=nums[i]
      return xor
  };