/**
 * @param {number[]} nums
 * @return {boolean}
 */
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  var increasingTriplet = function(nums) {
      var nums_i=nums.max()
      var nums_j=nums.max()
      for (var i=0;i<nums.length;i++){
          if (nums_i>=nums[i]){
              //find really value nums[i]
              nums_i=nums[i]
          }
          else if (nums_j>=nums[i]){
              //find really value nums[j]
              nums_j=nums[i]
          }
          else{
              //exists a value that satisfied
              return true
          }
      }
      return false
  };