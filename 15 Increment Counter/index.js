const valores = document.querySelectorAll("h6")

valores.forEach(valor=>{
    valor.innerText = "0"
    const aumento = () =>{
        const maximo = +valor.dataset.valor
        const actualizar = +valor.innerText
        const incremento = maximo/500
        if(actualizar < valor.dataset.valor){
            valor.innerText = `${Math.ceil(actualizar + incremento)}`
            setTimeout(aumento,1)
        }
        else{
            valor.innerText = valor.dataset.valor
        }
    }
    aumento()
})

