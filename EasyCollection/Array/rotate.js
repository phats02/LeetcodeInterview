/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(a, i, j){

    let li = i;

    let ri = j;

    while(li<ri){

        let temp = a[li];

        a[li++] = a[ri];

        a[ri--] = temp;
    }

}
var rotate = function(nums, k) {
  k=k%(nums.length)
  reverse(nums,0,nums.length-k-1)
  reverse(nums,nums.length-k,nums.length-1)
  nums.reverse()
  
};