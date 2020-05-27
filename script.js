var playerOne = prompt("Player One, please enter your name, you will be X");
var playerTwo = prompt("Player Two, please enter your name, you will be O");

var run = True;

var board = $("table tr");

// Return the cell value
function report(rowIndex, colIndex){
    return board.eq(rowIndex).find('td').eq(colIndex).textContent;
}

// Check if win
function matching(firstCell, secondCell, thirdCell){
    return (firstCell === secondCell && firstCell === thirdCell && firstCell !== '');
}

// Checks rows for matches
function horizontalMatch(){
    for(var row = 0; row < 3; row++){
        for(var col = 0; col < 3; col++){
            if(matching(report(row, col), report(row, col + 1), report(row, col + 2))){
                return true;
            }
            else{
                continue;
            }
        }
    }
}

// Checks cols for matches
function verticalMatch(){
    for(var col = 0; col < 3; col++){
        for(var row = 0; row < 3; row++){
            if(matching(report(row, col), report(row + 1, col), report(row + 2, col))){
                return true;
            }
        }
    }
}

// Checks diagonals
function diagonalMatch(){
    for(var row = 0; row < 3; row++){
        for(var col = 0; col < 3; col++){
            if(matching(report(row, col), report(row + 1, col + 1), report(row + 2, col + 2))){
                return true;
            }
            else if(matching(report(row, col + 2), report(row + 1, col + 1), report(row + 2, col))){
                return true;
            }
        }
    }
}


// Game logic
var player = 1;
var name = playerOne;
// $("").text(name + " it's your turn.") -> to add

$('table tr').on('click', function(){
    if(name === playerOne){
        this.textContent = 'X';
        player = 1;
        name = playerOne;
    }
    else if(name === playerTwo){
        this.textContent = 'O';
        player = -1;
        name = playerTwo;
    }
    else{
        this.textContent = '';
    }
    if(horizontalMatch() || verticalMatch() || diagonalMatch()){
        $('h1').text(name + ", you won!");

    }

    player = player*-1;    
    if(player === 1){
        name = playerOne;
    }
    else{
        name = playerTwo;
    }
    $('h3').text(name + " it's your turn.")

});

