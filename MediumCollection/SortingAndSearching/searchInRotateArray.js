/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    var findPivot=function(nums){
        var pivot=0
        for (var i=0;i<nums.length-1;i++){
            if (nums[i]>nums[i+1]){
                pivot=i
                break
            }
        }
        return pivot
    }
    var binarySearch=function(nums,target){
        var left=0
        var right=nums.length-1
        while(left<=right){
            var mid=Math.floor((left+right)/2)
            if (nums[mid]===target){
                return mid
            }
            else if (nums[mid]>target){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        return -1
    }
    
    var pivot=findPivot(nums)
    console.log(pivot)
    var resultSearchRight=binarySearch(nums.slice(pivot+1),target)
    if (resultSearchRight===-1){
        
        return binarySearch(nums.slice(0,pivot+1),target)
    }
    else{
        return pivot+resultSearchRight+1
    }
};