let userScore=0;
let compScore=0;

const choises = document.querySelectorAll(".choise");
const Msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");


const genCompChoise = () => {
    const operation = ["rock","paper","scissor"]
    const ranidx = Math.floor(Math.random()*3)
    return operation[ranidx];
}

 const drawGame = () => {
    Msg.innerText ="Game Draw🤞😉 !!";
    Msg.style.backgroundColor = " #982598";
    };

 const showWinner = (userWin ,userChoise , compChoise) => {
    if(userWin){
        userScore ++ ;
        uScore.innerText = userScore;
        Msg.innerText = `🎉👏You Win!👏🎉🎊 ${userChoise} beats ${compChoise}`; 
        Msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        cScore.innerText=compScore;
        Msg.innerText = `You Lose😔🤦‍♂️😓 ${compChoise} beats ${userChoise}`;
        Msg.style.backgroundColor = "#e74c3c";
    }
 };  
 
 const playGame = (userChoise) => {
    console.log("user choise :",userChoise)
    const compChoise = genCompChoise();
    console.log("comp choise :", compChoise )

    if (userChoise === compChoise) {
        drawGame(); 
    }
    else {
        let userWin=true;
        if(userChoise === "rock") {
            userWin = compChoise=== "paper"? false:true;
        }
        else if (userChoise === "paper") {
            userWin = compChoise==="scissor"? false:true;
        }
        else {
            userWin = compChoise==="rock"?false:true;
        }
       showWinner(userWin , userChoise , compChoise ); 
    }
 };

choises.forEach((choise)=> {
    choise.addEventListener("click", ()=> {
        const userChoise = choise.getAttribute("id");
        playGame(userChoise);
    });
});