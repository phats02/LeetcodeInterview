/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var map={}
    for (var i=0;i<board.length;i++){
        for (var j=0;j<board[i].length;j++){
            if (board[i][j]===".") continue
            var inRow='r'+board[i][j]+i
            var inCol='c'+board[i][j]+j
            var inBox=''+board[i][j]+Math.floor(i/3)+Math.floor(j/3)
            if (map.hasOwnProperty(inRow) || map.hasOwnProperty(inCol) || map.hasOwnProperty(inBox)){
                console.log(map.hasOwnProperty(inBox))
                return false;
            }
            else{
                map[inRow]=true
                map[inCol]=true
                map[inBox]=true
            }
        }
    }
    return true
};