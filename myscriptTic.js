var box1 = document.querySelector("#one");
var box2 = document.querySelector("#two");
var box3 = document.querySelector("#three");
var box4 = document.querySelector("#four");
var box5 = document.querySelector("#five");
var box6 = document.querySelector("#six");
var box7 = document.querySelector("#seven");
var box8 = document.querySelector("#eight");
var box9 = document.querySelector("#nine");


var all = document.querySelectorAll("td");

var restart = document.querySelector("#but");

function clearBoxes(){
    for(var i=0; i < all.length; i++){
        all[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoxes);

function check(){
    if(box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X' ){
        alert("X is the winner")
    }
    else if(box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O'){
        alert("O is the winner")
    }
}

function boxChange(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }
    else if(this.textContent === 'X'){
        this.textContent = 'O';
    }
    else{
        this.textContent = '';
    }
    
}



for (var i=0; i<all.length;i++){
    all[i].addEventListener('click', boxChange);
    check(); 
}

