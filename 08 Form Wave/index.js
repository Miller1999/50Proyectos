const inputs  =  document.querySelectorAll("input")
const labels = document.querySelectorAll("label")


function arriba(span){
    span.style.transform = "translateY(-30px)"
}
function abajo(span){
    span.style.transform = "translateY(0px)"
}
inputs.forEach(input =>{
    if(input.type == "email"){
        input.addEventListener("focus",(e)=>{
            const email = labels[0].children
            const arrayEmail = Array.from(email)
            let delay = 0
            arrayEmail.forEach(span => {
                span.style.animation = `subir .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                arriba(span)
            })
        })
        input.addEventListener("blur",(e) =>{
        const email = labels[0].children
        const arrayEmail = Array.from(email)
        var delay = 0
            if(e.target.value != ""){
                arrayEmail.forEach(span => {
                    span.style.animation = `subir .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                })
            }
            else{
                arrayEmail.forEach(span => {
                    span.style.animation = `bajar .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                    abajo(span)
                })
            }
        })
    }
    if(input.type == "password"){
        input.addEventListener("focus",(e)=>{
            const password = labels[1].children
            const arrayPassword = Array.from(password)
            let delay = 0
            arrayPassword.forEach(span => {
                span.style.animation = `subir .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                arriba(span)
            })
        })
        input.addEventListener("blur",(e) =>{
        const password = labels[1].children
        const arrayPassword = Array.from(password)
        var delay = 0
            if(e.target.value != ""){
                arrayPassword.forEach(span => {
                    span.style.animation = `subir .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                })
            }
            else{
                arrayPassword.forEach(span => {
                    span.style.animation = `bajar .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay = delay + 50}ms`
                    abajo(span)
                })
            }
        })
    }
})