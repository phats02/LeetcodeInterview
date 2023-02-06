/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var firstBad=Math.ceil(n/2)
        while(firstBad >=0 && firstBad<=n){
            if (isBadVersion(firstBad)){
                console.log(firstBad)
                if (firstBad==0 || !isBadVersion(firstBad-1)){
                    return firstBad
                }
                else{
                    n=firstBad
                    firstBad=Math.ceil(firstBad/2)
                }
            }
            else{
                firstBad=Math.ceil((n+firstBad)/2)
            }
        }
        return -1
    };
};