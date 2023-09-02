let cells=document.querySelectorAll(".cell")
let currentPlayer=document.querySelector(".player")
let currentTurn="x"
let gameOver=false 
let moves =0
let againBtn=document.querySelector(".againBtn")

againBtn.onclick=()=>{
  window.location.reload()
}


currentPlayer.innerHTML=`player - ${currentTurn} turn`

function play(index){
    if(!gameOver &&cells[index].innerHTML==""){
      cells[index].innerHTML=currentTurn
      moves+=1
    checkWin(currentTurn)
    checkDraw()
    if (currentTurn=="x") {
      currentTurn="o"
    }
    else{
      currentTurn="x"
    }
    if(!gameOver){
    currentPlayer.innerHTML=`player - ${currentTurn} turn`
    }
    
    }
    
}

function checkWin(player){
  const winChances=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    winChances.forEach((ele)=>{
      let [a,b,c]=ele
      if(cells[a].innerHTML!=""&&cells[b]!=""&&cells[c]!="")
      
      if(cells[a].innerHTML==cells[b].innerHTML&&cells[b].innerHTML==cells[c].innerHTML){
        gameOver=true
        winMsg(player)
      }
    })
}


function winMsg(player){
  currentPlayer.innerHTML=`player ${currentTurn} wins 🥳`
  swal.fire({
    title:`player ${player} wins`,
    customClass:{
      popup:"popop",
      title:"popup-title"
    }
  })
  
}

function checkDraw(){
  if(moves==9&&!gameOver){
    currentPlayer.innerHTML="draw"
    gameOver=true
    swal.fire({
      title:"draw",
    })
  }
}