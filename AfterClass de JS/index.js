// Variables
// var, let y cont
    // var
    //let y const
    
/*     // No es posible
    const soyVariable = 10
    soyVariable = 30

    // Si es posbile
    let soyVariable = 10
    soyVariable = 30 */

// Funciones

/* function saludar(name = 'Usuario'){
    console.log("Hola, " + name + " Bienvenido")
} //-> Está siendo menos usada.
/* const funcion1 = (name) => `Tu nombre es : ${name}` */
/* saludar('Enzo') */

// Condicionales

/*     if(false){
        console.log('Genial')
    }else{
        console.log('Oh no, fallamos')
    } */

// Tipos de datos
/*  let soyUnString = 5;
 console.log(typeof String(soyUnString)) // Number() */
    // string
    // number
    // bool
    // undefined
    // null

// Valores truthy y falsy

// 0 -> false
// 1 -> true
// '' -> false
// false, true
// {} -> true
// [] -> true

/*     if([]){
        console.log('entré')
    } */

// Scope
    // Global scope

 /*        function SoyCool(){
            for(let i=0; i<=20; i++){
                console.log(soyGlobal)
            }
        } */

    // Function scope
/*     soylaFuncion()
    let soylaFuncion = () => {
        let imIn = 'Estoy dentro'
        console.log(imIn)
    } */
    // Block scope

/*     for(let i = 0; i<10; i++){
        console.log(i)
    }

    console.log(i) */



// Hoisting
// var y function -> si tienen hoisting
// let y const -> estás no presentan hoisting

    
/*         console.log(x)
        let x = 5;
        console.log(x) */

        // 10101010101000101010101010101
/*         var x;
        x = 5
        console.log(x)  */

// Coerción 
// "5" + 5 -> 55 != 10
// "5" * 5 -> 25


// Operadores
/*   = == ===  && ! ? : 
*/
    // Asignación 
    // Comparación
    // Aritmeticos

// Loops for(){} while(){} do{}while()
// Arrays

/// this /// -> this? es una variable que referencia a un contexto en cuestión.

    //this en el scope global -> window
/*     console.log(this) */
    //this en una función -> window
/*     function App(){
        return this
    }
    console.log(App()) */
    //this en el contexto de un objeto
/*     const Persona = {
        name: 'Angel',
        saludar: function(){
            console.log(`Mi nombre es ${this.name}`)
        }
    }

    //this cuando sacamos a una función de un objeto -> window
    const accion = Persona.saludar
    accion() */
    //this en el contexto de una clase

    // Class en si -> this.
// EcmasScript -> Estándar

// Clases

/* class Persona{
    constructor(name, age, location){
        this.name = name
        this.age = age
        this.location = location
        console.log(this)
    }

    saludar(){
        console.log("Hola, mi nombre es " + this.name)
    }
}

let Enzo = new Persona('Enzo', 20, 'Montevideo')
let Paula = new Persona('Paula', 18, 'Canadá')
Paula.saludar()
 */

// Clases en JS

/* function Persona(name, age, location){
    this.name = name
    this.age = age
    this.location = location
    console.log(this)

    Persona.prototype.saludar = function(){
        console.log("Hola, mi nombre es " + this.name)
    }
}

let Matias = new Persona('Matias', 25, 'Miami')
let Enzo = new Persona('Enzo', 20, 'Montevideo')
console.log(Enzo.saludar()) */

const products = [
    {
        product1: 'Playera',
        color: 'red',
        id: 001
    },
    {
        product1: 'Pantalón',
        color: 'azul',
        id: 002
    },
    {
        product1: 'Camisa',
        color: 'negra',
        id: 003
    },
]

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve(products)
             }, 1000)
        }else{
            reject('Oh no, lo hice mal')
        }
    })
}

console.log('soy primero')
somethingWillHappen()
 .then((response) => console.log(response))
 .then(() => console.log('guardar en el localStorage'))
 .catch((error) => console.log(error))

setTimeout(() => {
    console.log('hey')
}, 2000)
 
