const toggle = document.querySelector(".toggle")
const html = document.querySelector("html")
const seconds = document.querySelector(".segundos")
const minutes = document.querySelector(".minuto")
const hours = document.querySelector(".hora")
const time = document.querySelector(".tiempo")
const date = document.querySelector(".fecha")

const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

console.log(date)

toggle.addEventListener("click",() => {
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        toggle.innerText = "Tema Oscuro"
    }
    else{
        toggle.innerText = "Tema Claro"
        html.classList.add("dark")
    }
})

function setTime(){
    const tiempo = new Date()
    const dia = tiempo.getDay()
    const mes = tiempo.getMonth()
    const numeroDia = tiempo.getDate()
    const horas = tiempo.getHours()
    const horas12 = horas % 12
    const minutos = tiempo.getMinutes()
    const segundos = tiempo.getSeconds()
    const ampm = horas >= 12 ? "PM" : "AM"
    hours.style.transform = `translate(-50%,-100%) rotate(${scale(horas12,0,11,0,360)}deg)`
    minutes.style.transform = `translate(-50%,-100%) rotate(${scale(minutos,0,59,0,360)}deg)`
    seconds.style.transform = `translate(-50%,-100%) rotate(${scale(segundos,0,59,0,360)}deg)`

    time.innerHTML = `${horas12}:${minutos} ${ampm}`
    date.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circle">${numeroDia}</span>`
}

setTime()

setInterval(setTime,1000)
// Funcion para transformar un valor en otro -> StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}