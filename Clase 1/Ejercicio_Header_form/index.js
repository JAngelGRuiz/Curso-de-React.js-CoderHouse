document.getElementById('email').addEventListener("change", onChange)
document.getElementById('password').addEventListener("change", onChange)
document.getElementById('form').addEventListener("submit", onSubmit)

const text = document.getElementById('form-content')

let login = {}

function onChange(event){
    login = {
      ...login,
      [event.target.name]: event.target.value
    }
    console.log(login)
}

function onSubmit(event){
    event.preventDefault()
    text.innerHTML = `<div class="">${login?.email}</div>`
}


let x = 'estoy afuera'

if(true){
    let x = 'estoy adentro'
    console.log(x)
}

console.log(x)

// let y const
