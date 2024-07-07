let userscore=0
let compscore=0

let user=document.querySelector("#user-score")
let comp=document.querySelector("#comp-score")
let msg=document.querySelector("#msg")
let msgcontainer=document.querySelector(".msg-container")
const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("choice is click",userChoice)
        playGame(userChoice)

    })
})

const gencomputerChoice=()=>{
    const options=["rock","paper","scissors"]
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
}


const showWin=(userWin,userChoice,comChoice)=>{
    if(userWin==true){
    //    console.log("You Win")
       msg.innerText=`You win Your ${userChoice} beats ${comChoice}`
       user.innerText=++userscore;
       msgcontainer.style.backgroundColor="green"
    }
    else{
        msg.innerText=`You Lose ${userChoice} beats Your ${comChoice}`
        // console.log("You Lose")
        comp.innerText=++compscore;
        msgcontainer.style.backgroundColor="red"
    }
}


let userWin;
const playGame=(userChoice)=>{
    console.log("userchoice::",userChoice)
    const comChoice=gencomputerChoice();
    console.log("computer choice::",comChoice)
    if(userChoice==comChoice){
        drawGame()
    }
    else if(userChoice=="rock" && comChoice=="paper"){
        userWin=false;
    }
    else if(userChoice=="rock" && comChoice=="scissors"){
        userWin=true;
    }
    else if(userChoice=="paper" && comChoice=="rock"){
        userWin=true;
    }
    else if(userChoice=="paper" && comChoice=="scissors"){
        userWin=false;
    }
    else if(userChoice=="scissors" && comChoice=="rock"){
        userWin=false;
    }
    else if(userChoice=="scissors" && comChoice=="paper"){
        userWin=true;
    }
    showWin(userWin,userChoice,comChoice)
}


const drawGame=()=>{
    // console.log("it's draw")
    msg.innerText="Game Draw Play Again"
    msgcontainer.style.backgroundColor="black"
    jump
}
