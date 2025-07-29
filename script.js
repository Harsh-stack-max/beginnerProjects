let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let newbtn = document.querySelector(".newbtn")
let win = document.querySelector(".win")
let msg = document.querySelector("#msg")
let turn0 = true
const winpatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]
const resetgame = () => {
  turn0 = true
  enableboxes()
  win.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
      if(turn0){
        box.innerText = "0"
        turn0 = false
      }
      else{
         box.innerText = "X"
         turn0 = true
      }
      box.disabled = true
      checkwinner()
    })
})
const disableboxes = () => {
    for (const element of boxes) {
        element.disabled = true      
    }
}
const enableboxes = () => {
    for (const element of boxes) {
        element.disabled = false
        element.innerText = ""      
    }
}
const showwinner = (winner) =>{
  msg.innerText = `Congratulations!! The Winner is ${winner}`
  win.classList.remove("hide")
  disableboxes()
}
const checkwinner = ()=>{
for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText
    let pos2val = boxes[pattern[1]].innerText
    let pos3val = boxes[pattern[2]].innerText
    if(pos1val!= "" && pos2val!= "" && pos3val!= ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("WINNER ",pos1val)
            showwinner(pos1val);
        }
    }
}
}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)