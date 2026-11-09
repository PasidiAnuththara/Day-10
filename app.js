let targetNumber = Math.floor(Math.random()* 10)+1;
console.log(targetNumber);


function guessnumber(){
    let userInput = document.getElementById("txtnumber").value;
    console.log(userInput);

    if(userInput === targetNumber){
        console.log("Done");
    }else if(userInput > targetNumber){
        console.log("High");
    }else if(userInput < targetNumber){
        console.log("Low");
    }
    
    
}

let clearButton = document.getElementById("btntryagain");
if(clearButton) {
    clearButton.addEventListener(`click`,()=>{
        location.reload();
    });
}
function btntryagain(){
    location.reload();
    
}