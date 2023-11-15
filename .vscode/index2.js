const cloud=document.getElementById("cloud")
const barraLateral=document.querySelector(".barra-lateral")
const spans=document.querySelectorAll("span")

const main=document.querySelector("main")
const footer=document.querySelector("footer")




cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    footer.classList.toggle("min-footer")
spans.forEach((span)=>{
    span.classList.toggle("oculto") 
})
})