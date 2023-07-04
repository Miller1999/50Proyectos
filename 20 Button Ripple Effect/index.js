const boton = document.querySelectorAll('.efecto')

boton.forEach(boton => {
    boton.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        const botonArriba = e.target.offsetTop
        const botonIzquierda = e.target.offsetLeft

        const xDentro = x - botonIzquierda
        const yDentro = y - botonArriba

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yDentro + 'px'
        circle.style.left = xDentro + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 1000)
    })
})