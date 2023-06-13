
const items = document.querySelectorAll("div")

const mirarCajas = () => {
    //innerHeight -> mide el espacio de la pantalla
    const cabeOtro = window.innerHeight/5*4
    items.forEach(item => {
        //getBoundingClientRect -> Da el espacio de cada eje hasta el borde
        const tope = item.getBoundingClientRect().top
        if(tope < cabeOtro){
            item.classList.add("centro")
        }
        else{
            item.classList.remove("centro")
        }
    })
}
mirarCajas()
// scroll -> toma el desplazamiento de la pantalla
window.addEventListener("scroll",mirarCajas)

