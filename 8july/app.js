// TASK: WAP to create tic-tac-toe game
prompt =  require('prompt-sync')()

board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printBoard() {
    for(i = 0; i < 3; i++) {
        output = ``;
        for(j = 0; j < 3; j++) {
            output += `${board[i][j]}\t`
        }
        console.log(output);
        console.log("------------------");
    }
}

function verifyWin() {
    console.log(board[0][0]);
    console.log(board[0][1]);
    console.log(board[0][2]);

    if(board[0][0] == board[0][1] && board[0][0] == board[0][2])
        return true;
    else 
        return false;
}


printBoard()



for(a = 0; a < 9; a++) {

    
    player = "X"
    
    // if(a == 1 || a == 3 || a == 5 || a == 7 || a == 9)
    if(a % 2 == 1)
        player = "O"
    
    position = Number(prompt("Player " + player + " Enter position: "))
    console.log(position);
    
    switch(position) {
        case 1: board[0][0] = player; break;
        case 2: board[0][1] = player; break;
        case 3: board[0][2] = player; break;
        case 4: board[1][0] = player; break;
        case 5: board[1][1] = player; break;
        case 6: board[1][2] = player; break;
        case 7: board[2][0] = player; break;
        case 8: board[2][1] = player; break;
        case 9: board[2][2] = player; break;
    }
    
    console.clear()
    printBoard()
    if(verifyWin() === true) {
        console.log("Player " + player + " win");
        break;
    }
}


// board[1][1] = "X"

