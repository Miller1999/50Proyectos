const botones = document.querySelectorAll("button")
const sonidos = {
    applause:{
        src: "./sounds/applause.mp3",
        name: "Applause"
    },
    boo:{
        src: "./sounds/boo.mp3",
        name: "Boo"
    },
    gasp:{
        src: "./sounds/gasp.mp3",
        name: "Gasp"
    },
    tada:{
        src: "./sounds/tada.mp3",
        name: "Tada"
    },
    victory:{
        src: "./sounds/victory.mp3",
        name: "Victory"
    },
    wrong:{
        src: "./sounds/wrong.mp3",
        name: "Wrong"
    }
}

const sonidosCreados = [ applause = new Audio(sonidos.applause.src), boo = new Audio(sonidos.boo.src), gasp = new Audio(sonidos.gasp.src), tada = new Audio(sonidos.tada.src), victory = new Audio(sonidos.victory.src), wrong = new Audio(sonidos.wrong.src)]

const parar = () => {
    sonidosCreados.forEach(sound => {
        sound.pause()
    })
}

botones.forEach(boton => {
    boton.addEventListener("click",(e) =>{
        switch (e.target.innerText){
            case sonidos.applause.name:
                parar()
                applause.play()
                break;
            case sonidos.boo.name:
                parar()
                boo.play()
                break;
            case sonidos.gasp.name:
                parar()
                gasp.play()
                break;
            case sonidos.tada.name:
                parar()
                tada.play()
                break;
            case sonidos.victory.name:
                parar()
                victory.play()
                break;
            case sonidos.wrong.name:
                parar()
                wrong.play()
                break;
        }
    })
});