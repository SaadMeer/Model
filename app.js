
const openModel = document.querySelector(".model-btn");
const closeModel = document.querySelector(".close-btn");
const modelOverlay = document.querySelector(".model-overlay");

openModel.addEventListener("click", function(){
    modelOverlay.classList.add("open-model");
})

closeModel.addEventListener("click", function(){
    modelOverlay.classList.remove("open-model");
})