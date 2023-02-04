/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result=[]
    var map={}
    for (var i=0;i<nums.length;i++){
        if (map.hasOwnProperty(target-nums[i])){
            result.push(i,map[target-nums[i]])
            break
        }
        else{
            map[nums[i]]=i
        }
    }
    return result
};