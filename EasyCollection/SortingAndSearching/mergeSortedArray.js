/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //i:index in nums1, j: index in nums2
    var i=0
    var j=0
    nums1.splice(m)
    while(i<n+m && j<n){
        if (nums1[i]>nums2[j]){
            nums1.splice(i,0,nums2[j])
            j++
        }
        i++
        
    }
    while(j<n){
        nums1.push(nums2[j])
        j++
    }
};