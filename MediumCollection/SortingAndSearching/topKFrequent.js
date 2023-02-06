/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function findKeyWithMaxValue(obj){
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
var topKFrequent = function(nums, k) {
    var map={}
    for (var i=0;i<nums.length;i++){
        if (map.hasOwnProperty(nums[i])){
            map[nums[i]]++
        }
        else{
            map[nums[i]]=1
        }
    }
    var result=[]
    while(k>0){
        var k_key=findKeyWithMaxValue(map)
        result.push(k_key)
        delete map[k_key]
        k--
    }
    return result
};