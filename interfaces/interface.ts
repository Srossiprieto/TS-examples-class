

// interface, define la estructura/forma de un objeto el cual se llaman "contratos" Las interfaces en TypeScript son una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo, y también definen la forma que tienen los objetos.

// Basicamente definir el contrato de un objeto para especificar sus metodos y propiedades.
interface Heroe {
    id: string
    name: string	
    age: number
    saluda: () => void
}

let hero: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saluda: () => {
        console.log('Hola soy Spiderman');
    }
}

// Tambien pueden estar anidadas
interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}


// extends para heredar propiedades de otra interface
interface Zapatilla extends Producto {
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Zapatilla[]
    // productos: (Producto | Zapatilla)[] TAMBIEN SE PUEDE HACER DE ESTA FORMA PARA QUE PUEDA RECIBIR AMBOS TIPOS DE OBJETOS
}


interface CarritoOps {
    add: (product: Producto) => void
    remove: (id: number) => void
    clear: () => void
}

// interface CarritoOps {
//     add(product: Producto): void
//     remove(id: number): void
//     clear(): void
// }

interface CarritoOps {
    clear: () => void // EXTENDS AUTOMATICAMENTE... EN UN PROYECTO GRANDE SI NO LO TENEMOS EN CLARO PUEDE SER UN PROBLEMA.
}
// CON LOS TYPE NO SE PUEDEN UTILIZAR DOS VECES EN CAMBIO CON LAS INTERFACES SI SE PUEDEN UTILIZAR VARIAS VECES Y PUEDE MAREARTE... 


const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {id: 1, nombre: 'Camiseta', precio: 10, quantity:3, talla: 11},
        {id: 2, nombre: 'Pantalon', precio: 20, quantity: 2, talla: 10},
        {id: 3, nombre: 'Zapatos', precio: 30, quantity: 1, talla: 8.5},
    ]}


// interface vs types 

/* 
    - Definir objetos o un metodo de objeto o la forma de una clase = interface --> beneficio fusión de declaraciones
    - Types para todo lo demás:
        -Alias de tipos primitivos.
        -Tuplas.
        -Uniones.
        -Sobre cargar funciones.

*/