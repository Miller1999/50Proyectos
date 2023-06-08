const div1 = document.getElementById("1")
const div2 = document.getElementById("2")
const div3 = document.getElementById("3")
const div4 = document.getElementById("4")
const div5 = document.getElementById("5")

addEventListener("click",(e)=>{
    console.log(e.target.id)
    if(e.target.id == 1){
        div1.classList.add("itemG")
        div2.classList.remove("itemG")
        div3.classList.remove("itemG")
        div4.classList.remove("itemG")
        div5.classList.remove("itemG")
    }
    if(e.target.id == 2){
        div1.classList.remove("itemG")
        div2.classList.add("itemG")
        div3.classList.remove("itemG")
        div4.classList.remove("itemG")
        div5.classList.remove("itemG")
    }
    if(e.target.id == 3){
        div1.classList.remove("itemG")
        div2.classList.remove("itemG")
        div3.classList.add("itemG")
        div4.classList.remove("itemG")
        div5.classList.remove("itemG")
    }
    if(e.target.id == 4){
        div1.classList.remove("itemG")
        div2.classList.remove("itemG")
        div3.classList.remove("itemG")
        div4.classList.add("itemG")
        div5.classList.remove("itemG")
    }
    if(e.target.id == 5){
        div1.classList.remove("itemG")
        div2.classList.remove("itemG")
        div3.classList.remove("itemG")
        div4.classList.remove("itemG")
        div5.classList.add("itemG")
    }
})