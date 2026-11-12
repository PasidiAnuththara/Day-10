let targetNumber = Math.floor(Math.random() * 10) + 1;
console.log("Target Number : ", targetNumber);
let attempt = 3;


function guessnumber() {
    let userInput = Number(document.getElementById("txtnumber").value);
    console.log("User Input : ", userInput);

    if (userInput === targetNumber) {
        alert("Congratulations! It is the correct number.");
        console.log("Congratulation.It is the correct Number. ");
        btntryagain();
        return;

    } else if (userInput > targetNumber) {
        // console.log("High");
        Swal.fire({
            title: "Your number is grater than target number.Try again!",
            width: 600,
            padding: "3em",
            color: "#7e0fbf",
            background: "#ffffff url(/images/trees.png)",
            backdrop: `
    rgba(8, 0, 123, 0.56)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
        });

    } else if (userInput < targetNumber) {
        console.log("Low");
    }

    attempt--;

    if (attempt > 0) {
        alert(`Wrong !.You have only ${attempt} attempts left.`);
    } else {
        alert(`Game Over!No Attempts left .The correct number was :${targetNumber}`);
        btntryagain();
    }

    document.getElementById("txtnumber").value = "";
}

// let clearButton = document.getElementById("btntryagain");
// if(clearButton) {
//     clearButton.addEventListener(`click`,()=>{
//         location.reload();
//     });
// }
function btntryagain() {
    location.reload();

}