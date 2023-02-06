/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var isPeak=function(index,nums){
        if (index==0){
            return (nums.length==1 || nums[0]>nums[1])
        }
        else if (index==nums.length-1){
            return (nums.length==1|| nums[nums.length-1]>nums[nums.length-2])
        }
        else{
            return (nums[index]>nums[index-1] && nums[index]>nums[index+1])
        }
    }
    var left=0;
    var right=nums.length-1
    while(left<=right){
        var mid=Math.floor((left+right)/2)
        if (isPeak(mid,nums)){
            return mid
        }
        else if (mid<nums.length-1 && nums[mid]<nums[mid+1]){
            left=mid+1
        }
        else{
            right=mid-1   
        }
    }
};