/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result=[-1,-1]
    var left=0
    var right=nums.length-1
    while(left<=right){
        var mid=Math.floor((left+right)/2)
        if (nums[mid]===target){
            var i=mid
            var j=mid
            while(i>=0){
                if(i==0) result[0]=i
                else if (nums[i-1]<target){
                    result[0]=i
                    break
                }
                i--
            }
            while(j<nums.length){
                if (j==nums.length-1) result[1]=j
                else if (nums[j+1]>target){
                    result[1]=j
                    break
                }
                j++
            }
            break
        }
        else{
            if (nums[mid]>target){
                right=mid-1
            }
            else left=mid+1
        }
    }
    return result
};