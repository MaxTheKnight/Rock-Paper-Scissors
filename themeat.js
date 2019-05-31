let wins = 0;
let losses = 0;
let ties = 0;

function computersMove() {
    let randint = Math.floor(Math.random()*3);

    if (randint === 0){
        return "rock";
    } 
    
    if (randint === 1){
        return "paper";
    }  
    
    if (randint === 2){
        return "scissors";
    } 

}


function updateScore(result) {
    if (result === "wins") {
    wins = wins + 1;
    document.getElementById("wins").innerHTML = wins;
    }
    if (result === "losses") {
    losses = losses + 1;
    document.getElementById("losses").innerHTML = losses;
    }
    if (result === "ties") {
    ties = ties + 1;
    document.getElementById("ties").innerHTML = ties;
    }
    }
    
    function onClickBoulder() {
    let cm = computersMove();
    if (cm === "rock") {
    updateScore ("ties");
    alert ("meh")
    }
    if (cm === "scissors") {
    updateScore ("wins");
    alert ("ey u wen")
    }
    if (cm === "paper") {
    updateScore ("losses");
    alert ("nooooo")
    }
    }
    
    function onClickPapyrus() {
    let cm = computersMove();
    if (cm === "paper") {
    //tie
    updateScore ("ties");
    alert ("i cant tie a tie")
    }
    if (cm === "rock") {
    //lost
    updateScore ("wins");
    alert ("doooood u wiiiiiin")
    }
    if (cm === "scissors") {
    //win
    updateScore ("losses");
    alert ("yaaaaaay u ded")
    }
    }
    
    function onClickShears() {
    let cm = computersMove();
    if (cm === "scissors") {
    //tie
    updateScore ("ties");
    alert ("*inhale*")
    }
    if (cm === "rock") {
    //lost
    updateScore ("losses");
    alert ("lol u ded")
    }
    if (cm === "paper") {
    //win
    updateScore ("wins");
    alert ("UwU")
    }
    }
    
    document.getElementById("rock").onclick = onClickBoulder;
    document.getElementById("paper").onclick = onClickPapyrus;
    document.getElementById("scissor").onclick = onClickShears;