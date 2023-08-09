const questionContaineur = document.querySelector('.click-event')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const reponse = document.querySelector('p')


questionContaineur.addEventListener("click", ()=>{
    questionContaineur.classList.toggle("question-clicked")
})


btn1.addEventListener("click", ()=>{
    reponse.classList.add("show-response")
    reponse.style.background = "green"
})


btn2.addEventListener("click", ()=>{
    reponse.classList.add("show-response") 
    reponse.style.background = "red"
})



// ----------------------------------------------------
// Mouse Events

const mouvemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e)=>{
    mouvemove.style.left = e.pageX + "px"
    mouvemove.style.top = e.pageY + "px"
})


window.addEventListener("mousedown", ()=>{
    mouvemove.style.transform = "scale(2) translate(-25%, -25%)"
})
window.addEventListener("mouseup", ()=>{
    mouvemove.style.transform = "scale(1) translate(-50%, -50%)"
})



const mouvein = document.querySelector('.mouveenter')
console.log(mouvein);


mouvein.addEventListener("mouseenter", () => {
    mouvein.style.borderRadius = '50px'
})
mouvein.addEventListener("mouseout", () => {
    mouvein.style.borderRadius = '0px'
})