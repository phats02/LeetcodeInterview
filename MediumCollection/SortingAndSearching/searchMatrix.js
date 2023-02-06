/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var binarySearch=function (nums,target){
        var left=0
        var right=nums.length-1
        while(left<=right){
            var mid=Math.floor((left+right)/2)
            if (nums[mid]===target){
                return mid
            }
            else if (nums[mid] > target){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        return -1
    }
    
    for (var i=0;i<matrix.length;i++){
        if (matrix[i][0]===target){
           return true   
        }
        else if (matrix[i][0]<target){
            if (binarySearch(matrix[i],target) != -1) return true
        }
        else{
            break
        }
    }
   return false
};