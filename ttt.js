document.querySelector("button").addEventListener("click", popUpFunc)
function popUpFunc(){
    alert("Game is starting again!, Click OK to continue");
};

document.querySelector("input").addEventListener("click", winLose);

//winning or losing game function
function winLose(){
    let b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1= document.getElementById("b1").value;
    b2= document.getElementById("b2").value;
    b3= document.getElementById("b3").value;
    b4= document.getElementById("b4").value;
    b5= document.getElementById("b5").value;
    b6= document.getElementById("b6").value;
    b7= document.getElementById("b7").value;
    b8= document.getElementById("b8").value;
    b9= document.getElementById("b9").value;

    let b1button, b2button, b3button, b4button, b5button, b6button, b7button, b8button, b9button;
    b1button= document.getElementById("b1");
    b2button= document.getElementById("b2");
    b3button= document.getElementById("b3");
    b4button= document.getElementById("b4");
    b5button= document.getElementById("b5");
    b6button= document.getElementById("b6");
    b7button= document.getElementById("b7");
    b8button= document.getElementById("b8");
    b9button= document.getElementById("b9");
    console.log('checking:b1  '+b1+' b2: '+b2+' b3: '+b3);
    //setting the winning conditions of "X"
    if((b1 == 'X')  && (b2 == 'X') && (b3 == 'X') ){
        console.log('here:');
        document.getElementById("print-score").innerHTML = "Player X won";
        b4button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b1button.style.backgroundColor = "pink";
        b2button.style.backgroundColor = "pink";
        b3button.style.backgroundColor = "pink";
    }
    else if((b4 == 'X')  && (b5 =='X') && (b6 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b1button.disabled = true;
        b2button.disabled = true;
        b3button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b4button.style.backgroundColor = "pink";
        b5button.style.backgroundColor = "pink";
        b6button.style.backgroundColor = "pink";
    }
    else if((b7 == 'X') && (b8 =='X') && (b9 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b1button.disabled = true;
        b2button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;

        b7button.style.backgroundColor = "pink";
        b8button.style.backgroundColor = "pink";
        b9button.style.backgroundColor = "pink";
    }
    else if((b1 == 'X')  && (b4 == 'X') && (b7 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b2button.disabled = true;
        b3button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b1button.style.backgroundColor = "pink";
        b4button.style.backgroundColor = "pink";
        b7button.style.backgroundColor = "pink";
    }
    else if((b2 == 'X')  && (b5 == 'X') &&  (b8 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b1button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b9button.disabled = true;

        b2button.style.backgroundColor = "pink";
        b5button.style.backgroundColor = "pink";
        b8button.style.backgroundColor = "pink";
    }
    else if((b3 == 'X')  && (b6 == 'X') &&  (b9 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b1button.disabled = true;
        b2button.disabled = true;
        b4button.disabled = true;
        b5button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;

        b3button.style.backgroundColor = "pink";
        b6button.style.backgroundColor = "pink";
        b9button.style.backgroundColor = "pink";
    }
    else if((b1 == 'X')  && (b5 =='X') &&  (b9 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b2button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;

        b1button.style.backgroundColor = "pink";
        b5button.style.backgroundColor = "pink";
        b9button.style.backgroundColor = "pink";
    }
    else if((b3 == 'X')  && (b5 =='X')  &&  (b7 == 'X')){
        document.getElementById("print-score").innerHTML = "Player X won";
        b1button.disabled = true;
        b2button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b3button.style.backgroundColor = "pink";
        b5button.style.backgroundColor = "pink";
        b7button.style.backgroundColor = "pink";
    }

    //setting the winning conditions of "O"
    else if((b1 == 'O')  && (b2 == 'O') && (b3 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b4button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b1button.style.backgroundColor = "purple";
        b2button.style.backgroundColor = "purple";
        b3button.style.backgroundColor = "purple";
    }
    else if((b4 == 'O') && (b5 =='O')  && (b6 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b1button.disabled = true;
        b2button.disabled = true;
        b3button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b4button.style.backgroundColor = "purple";
        b5button.style.backgroundColor = "purple";
        b6button.style.backgroundColor = "purple";
    }
    else if((b7 == 'O')  && (b8 =='O') && (b9 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b1button.disabled = true;
        b2button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;

        b7button.style.backgroundColor = "purple";
        b8button.style.backgroundColor = "purple";
        b9button.style.backgroundColor = "purple";
    }
    else if((b1 == 'O')  && (b4 == 'O') &&  (b7 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b2button.disabled = true;
        b3button.disabled = true;
        b5button.disabled = true;
        b6button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b1button.style.backgroundColor = "purple";
        b4button.style.backgroundColor = "purple";
        b7button.style.backgroundColor = "purple";
    }
    else if((b2 == 'O')  && (b5 =='O')  &&  (b8 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b1button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b9button.disabled = true;

        b2button.style.backgroundColor = "purple";
        b5button.style.backgroundColor = "purple";
        b8button.style.backgroundColor = "purple";
    }    
    else if((b3 == 'O')  && (b6 =='O') && (b9 == 'O') ){
        document.getElementById("print-score").innerHTML = "Player O won";
        b1button.disabled = true;
        b2button.disabled = true;
        b4button.disabled = true;
        b5button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;

        b3button.style.backgroundColor = "purple";
        b6button.style.backgroundColor = "purple";
        b9button.style.backgroundColor = "purple";
    }
    else if((b1 == 'O') && (b5 =='O')&& (b9 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b2button.disabled = true;
        b3button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b7button.disabled = true;
        b8button.disabled = true;

        b1button.style.backgroundColor = "purple";
        b5button.style.backgroundColor = "purple";
        b9button.style.backgroundColor = "purple";
    }
    else if((b3 == 'O') && (b5 =='O') && (b7 == 'O')){
        document.getElementById("print-score").innerHTML = "Player O won";
        b1button.disabled = true;
        b2button.disabled = true;
        b4button.disabled = true;
        b6button.disabled = true;
        b8button.disabled = true;
        b9button.disabled = true;

        b3button.style.backgroundColor = "purple";
        b5button.style.backgroundColor = "purple";
        b7button.style.backgroundColor = "purple";
    }
    //reult for tie match
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) 
            {
        
        b1button.style.backgroundColor = "red";
        b2button.style.backgroundColor = "red";
        b3button.style.backgroundColor = "red";
        b4button.style.backgroundColor = "red";
        b5button.style.backgroundColor = "red";
        b6button.style.backgroundColor = "red";
        b7button.style.backgroundColor = "red";
        b8button.style.backgroundColor = "red";   
        b9button.style.backgroundColor = "red";    
        document.getElementById('print-score').innerHTML = "Match Tie";
    } 
    else { 
        console.log('here in else:');
  
        // Here, Printing Result 
        // if (flag == 1) { 
        //     document.getElementById('print').innerHTML = "Player X Turn"; 
        // } 
        // else { 
        //    document.getElementById('print') 
        //        .innerHTML = "Player 0 Turn"; 
        // }
    } 
};    


//function for reseting the game
function reseting(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 ='';
};

//functions to check the turns of players 
let chance = "X";
function turnb1(){
    if(chance == "X"){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        chance = "X";
    }
};

function turnb2(){
    if(chance == "X"){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        chance = "X";
    }
};

function turnb3(){
    if(chance == "X"){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        chance = "X";
    }
};

function turnb4(){
    if(chance == "X"){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        chance = "X";
    }
};

function turnb5(){
    if(chance == "X"){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        chance = "X";
    }
};

function turnb6(){
    if(chance == "X"){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        chance = "X";
    }
};

function turnb7(){
    if(chance == "X"){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        chance = "X";
    }
};

function turnb8(){
    if(chance == "X"){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        chance = "X";
    }
};

function turnb9(){
    if(chance == "X"){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        chance = "o";
    }else{
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        chance = "X";
    }
};