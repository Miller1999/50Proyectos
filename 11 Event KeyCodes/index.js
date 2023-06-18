const key = document.getElementById("key")
const keyCode = document.getElementById("keyCode")
const code = document.getElementById("code")
const tarjeta = document.querySelectorAll(".tarjeta")
const principal = document.querySelector(".pregunta")

document.addEventListener("keydown",(e)=>{
    key.innerHTML = e.key
    keyCode.innerHTML = e.keyCode
    code.innerHTML = e.code
    if(key.innerHTML != ""){
        tarjeta.forEach(tarjeta =>{
            tarjeta.classList.remove("oculta")
        })
        principal.classList.add("oculta")
    }
})