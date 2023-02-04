/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function twoSum(nums,target){
    var map={}
    var result=[]
    for (var i=0;i<nums.length;i++){
        if (map.hasOwnProperty(target-nums[i])){
            result.push([map[target-nums[i]],i])
        }
        else{
            map[nums[i]]=i
        }
    }
    return result
}
var threeSum = function(nums) {
    var result=[]
    var setCheckValid={}
    for (var i=0;i<nums.length;i++){
        var arrIndex=twoSum(nums.slice(i+1),-nums[i])
        if (arrIndex.length==0) continue
  
        //check valid res:
        for (var j=0;j<arrIndex.length;j++){
            var isValid=true
            arrIndex[j]=arrIndex[j].map(x=>x+i+1)
            if (isValid){
                var tempSet=[nums[i],nums[arrIndex[j][0]],nums[arrIndex[j][1]]].sort()
                setCheckValid[tempSet]=true
            }
        }
    }
    for (var property in setCheckValid){
        result.push(property.split(','))
    }
    return result
};