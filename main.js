const container=document.querySelector(".container")
const card= document.querySelector(".card");
const submit=document.getElementById("submit")
const rating=document.getElementById("rating")
const rates=document.querySelectorAll(".btns")


submit.addEventListener('click', () => {
    card.classList.remove("hidden")
    container.style.display="none"
})
/*.btn.addEventListener('click', () => {
    
})*/
rates.forEach((rates) => {
   rates.addEventListener('click', () => {
    rating.innerHTML = rates.innerHTML
   }) 
})
  
