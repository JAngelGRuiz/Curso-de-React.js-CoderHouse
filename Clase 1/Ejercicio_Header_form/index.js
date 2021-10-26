document.getElementById('email').addEventListener("change", onChange)
document.getElementById('password').addEventListener("change", onChange)
document.getElementById('form').addEventListener("submit", onSubmit)

const text = document.getElementById('form-content')
let login

if(text.childNodes.length === 0){
    text.style.display = 'none'
}


function onChange(event){
    login = {
      ...login,
      [event.target.name]: event.target.value
    }
    console.log(login)
}

function onSubmit(event){
    event.preventDefault()
    if(login?.email != null && login?.password != null){
        text.style.display = 'grid'
        text.innerHTML = `<h2> Tu correo es: ${login?.email}</h2>`
    }else{
        alert("Llena los campos")
    }
}

/* 
    Ejercicio de ECMAScript de LET, CONST Y VAR
    let Y const son las nuevas formas en que declaramos variables 
    en javascript. var está siendo obsoleta.
    const y let te permiten tener un scope de bloque, y no global como var.
    const no se puede reasignar y let si
*/
let x = 'estoy afuera'

if(true){
    let x = 'estoy adentro'
    console.log(x)
}

console.log(x)
