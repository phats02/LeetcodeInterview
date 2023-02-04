/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var setRow=new Set()
    var setCol=new Set()
    for (var i=0;i<matrix.length;i++){
        for (var j=0;j<matrix[i].length;j++){
            if (matrix[i][j]===0){
                setRow.add(i)
                setCol.add(j)
            }
        }
    }
    for (var i=0;i<matrix.length;i++){
        for (var j=0;j<matrix[i].length;j++){
            
            if (setRow.has(i) || setCol.has(j)){
                matrix[i][j]=0
                
            }
        }
    }
};