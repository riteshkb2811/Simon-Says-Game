let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;

let userCol;

let h2= document.querySelector("h2");
let btn=["yellow","red","blue","green"];



document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game started");
    started=true;
    levelUp();    
}
});



function flash(btn)
{
    btn.classList.add("flash");
    setInterval(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setInterval(function(){
        btn.classList.remove("userflash");
    },150);
}


function levelUp() {
    userSeq = []; // Reset user's sequence for new level
    level++;
    h2.innerText = `Level ${level}`;
    let rad = Math.floor(Math.random() * 4);
    let random = btn[rad];
    let randbut = document.querySelector(`#${random}`);
    gameSeq.push(random); // Store the id, not the element itself
    console.log(gameSeq);
    flash(randbut);
}

function check(str)
 {
    if(userSeq[str]===gameSeq[str])
    { 
        if(userSeq.length==gameSeq.length)
        { 
            levelUp();
        }
    }
    else{ 
        h2.innerHTML = `Game Over! Your Score was ${gameSeq.length}.<br>Press Any Key to Try Again.`;
        started = false;
        level=0;
        gameSeq=[];
        const body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function() { 
            body.style.backgroundColor = "#0dcaf0";
        }, 150);
    }
 }

let allbtn=document.querySelectorAll(".chld");

function butnpress()
{ 
  console.log("Button pressed");
  let btn = this;
  userflash(btn);
  userCol=btn.getAttribute("id");
  userSeq.push(userCol);
  console.log(userCol);
  check(userSeq.length-1);
}
allbtn.forEach(function(btn) { 
    btn.addEventListener("click", butnpress);
});
 