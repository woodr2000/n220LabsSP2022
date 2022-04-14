let board = [
    ['x', 'o', 'o'],
    ['x', 'o', 'x'],
    ['x', 'x', 'o']
]

function isWin(){
    let vCheck = [];
    let hCheck = [];
    let totalx = 0;
    let totaly = 0;

    for(y=0; y<board.length; y++){
        for(x=0; x<board[0].length;x++){
            //vertical check
            vCheck.push(board[x][y]);

            //horizontal check
            hCheck.push(board[y][x]);
        }
    }
    console.log(vCheck);
    console.log(hCheck);
    
    for(x=0; x<vCheck.length; x++){
        if(totalx < 3){ //if the total is less than 3, then check the next number, otherwise I want the outcome to get 1
            if(vCheck[x] == "x"){ //if it is equal to 1, add to total
                totalx++;
            } else { //if it is not a 1, then reset total to 0
                totalx = 0;
            }
        } else { //this is one of the conditions to win
            totalx = 3;
        } 
        if(totalx < 3){
            if(vCheck[x] == "y"){ //if it is equal to 1, add to total
                totaly++;
            } else { //if it is not a 1, then reset total to 0
                totaly = 0;
            }
        } else {
            totaly = 3;
        }
    }
    console.log(result);
}