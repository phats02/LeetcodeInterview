/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var pivot=nums[Math.floor((nums.length-1)/2)]
    // console.log(pivot,k,nums)
    var underList=[]
    var upperList=[]
    var equalList=[]
    for (var i=0;i<nums.length;i++){
        if (nums[i]<pivot){
            underList.push(nums[i])
        }
        else if (nums[i]>pivot){
            upperList.push(nums[i])
        }
        else{
            equalList.push(nums[i])
        }
    }
    if (k<=upperList.length){
        return findKthLargest(upperList,k)
    }
    else if (k>upperList.length+equalList.length){
        return findKthLargest(underList,k-upperList.length-equalList.length)
    }
    else{
        return pivot
    }
};