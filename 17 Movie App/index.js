// Declaraciones
const contenedor = document.querySelector(".contenedorPrincipal")
const buscar = document.getElementById("form")
const busqueda = document.getElementById("search")

//APIS
const infoGeneral =  "https://api.themoviedb.org/3/movie/popular?api_key=72721f764d3b911a5e4138eae287a40f&page=1"
const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=72721f764d3b911a5e4138eae287a40f&query="'
informacion(infoGeneral)
async function informacion (url){
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    peliculas(data.results)
}

function peliculas(peliculas){
    contenedor.innerHTML = ""
    peliculas.forEach((pelicula)=>{
        const {original_title,vote_average,overview,poster_path} = pelicula
        const nuevaTarjeta = document.createElement("div")
        nuevaTarjeta.classList.add("tarjeta")
        const contenido = `
            <img src="https://image.tmdb.org/t/p/w1280/${poster_path}" alt="">
            <div class="texto">
                <h1>${original_title}</h1>
                <p style="color:${rating(vote_average)}">${vote_average}</p>
            </div>
            <div class="informacion">
                <h2>Overview</h2>
                <p>${overview}</p>
            </div>
        `
        nuevaTarjeta.innerHTML = contenido
        contenedor.appendChild(nuevaTarjeta)
    })
}

function rating(puntuacion){
    if(puntuacion >= 8)
        return "#00FF00"
    else if(puntuacion >= 5){
        return "#FF8C00"
    }
    else{
        return "red"
    }
    
}

buscar.addEventListener("submit",(e) => {
    e.preventDefault()

    const termino = busqueda.value

    if(termino && termino !== ""){
        informacion(apiSearch + termino)
        termino.value = ""
    }
    else{
        window.location.reload()
    }
})