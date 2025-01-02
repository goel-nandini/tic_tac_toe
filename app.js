let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGamebtn = document.querySelector(".new-btn");

let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");
//let hide = document.querySelector(".hide");



/*turn of the player*/

 //example of 2d array
/// let arr2d=[["mango","apple","banana"],["pnk","bllue","green"],["shirt","pant"]];
 

 //winpatterns
 const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


 ];
 let turnO = true;
 const resetGame = ()=>
 {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

    


 }

 
 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){//turn of playr o ;
            box.innerText="O";
            turnO=false;

        }
        else{ //turn of playr x;
             box.innerText="X";
             turnO=true;

        }
        box.disabled=true;
        checkWinner();

    });

 }
);
const disableBoxes = ()=>
    {
        for (let box of boxes ){
            box.disabled=true;
        }
    }
    const enableBoxes = ()=>
        {
            for (let box of boxes ){
                box.disabled=false;
                box.innerText="";
            }
        }
    

const showWinner = (winner)=> {
    msg.innerText =`congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();



}



const checkWinner=() => {
    for ( let pattern of winpatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
             showWinner(pos1val);
             


               
            }
        }
        
       
       
}};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

