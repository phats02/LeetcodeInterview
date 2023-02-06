/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var map={0:0,1:0,2:0}
    for (var i=0;i<nums.length;i++){
        map[nums[i]]++
    }
    for (var i=0;i<nums.length;i++){
        if (map[0]){
            nums[i]=0
            map[0]--
        }
        else if (map[1]){
            nums[i]=1
            map[1]--
        }
        else if (map[2]){
            nums[i]=2
            map[2]--
        }
    }
};