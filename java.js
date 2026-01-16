let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const option = ["rock" , "paper" , "scissor"];
    const randchoice = Math.floor(Math.random()*3);
    return option[randchoice];
};

const drawgame = () =>{
    console.log("game was draw. ");
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "blue";
}

const userwiner = (userwin) =>{
    if(userwin){
        userscore++;
        userscorepara. innerText = userscore;
        console.log("You win! ");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara. innerText = compscore;
        console.log("you lose! ");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);

    const compchoice = gencompchoice();
    console. log(" comp choice = ", compchoice);

    if(userchoice === compchoice){
        //draw
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin= compchoice == "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        userwiner(userwin);
    }
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

