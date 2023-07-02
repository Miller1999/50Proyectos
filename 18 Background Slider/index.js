const izquierda = document.getElementById("left")
const derecha = document.getElementById("right")
const slides = document.querySelectorAll(".slider")
const fondo = document.getElementById("body")

let contadorSlides = 0

izquierda.addEventListener("click",(e)=>{
    contadorSlides--
    if(contadorSlides < 0){
        contadorSlides = slides.length - 1
    }
    if(contadorSlides == 0){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    if(contadorSlides == 1){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')"
    }
    if(contadorSlides == 2){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    if(contadorSlides == 3){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')"
    }
    if(contadorSlides == 4){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    console.log(contadorSlides)
})

derecha.addEventListener("click",(e)=>{
    contadorSlides++
    if(contadorSlides > slides.length - 1){
        contadorSlides = 0
    }
    if(contadorSlides == 0){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    if(contadorSlides == 1){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')"
    }
    if(contadorSlides == 2){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    if(contadorSlides == 3){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')"
    }
    if(contadorSlides == 4){
        activo()
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
    }
    console.log(contadorSlides)
})

function activo(){
    slides.forEach(slide => {
        slide.classList.remove("activo")
    })
    slides[contadorSlides].classList.add("activo")
}


