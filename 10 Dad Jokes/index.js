const broma = document.querySelector("p")
const boton = document.querySelector("button")

console.log(broma.innerHTML)
console.log(boton)

boton.addEventListener("click",bromaPapa)

bromaPapa()

async function bromaPapa(){

    const respuesta  = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"
        }
    })

    const data = await respuesta.json()
    console.log(data)

    broma.innerText = data.joke
}
    

