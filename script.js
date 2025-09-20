let userScore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#User-score");
const compscorepara=document.querySelector("#Comp-score")

const gencompchoice = ()=>{
   let options = ["rock" , "paper" , "scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};


const drawgame = ()=>{
    msg.innerText = "Game Was Drawn. Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin , userchoice , compchoice) =>{
      if(userwin){
        userScore ++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win.  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="Green";
      }
      else{
        compscore ++;
        compscorepara.innerText = compscore;
         msg.innerText = `You Lose.  ${compchoice} beats Your ${userchoice}`;
         msg.style.backgroundColor = "Red";
      }
};


const playgame= (userchoice) =>{
    const compchoice= gencompchoice();
     if(userchoice === compchoice)
     {
         drawgame();
     }
     else
     {
        let userwin = true;
        if(userchoice === "rock")
        {
           userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            userwin = compchoice === "scissors" ? false : true;
        }
        else
        {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
     }
};

choices.forEach((choice) =>{
    choice.addEventListener("click" ,()=>{
     const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    })
});
