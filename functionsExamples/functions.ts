// functions

/* function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Juan"); 

// ❌ saludar(2); ====> Error ya que es un number y no un string. 

*/


// objetos como funciones.

// ❌ function saludar({name: string, age: number}) ya que no se puede definir el tipo de los atributos de un objeto en una función.

/*   // ✅ esta es una forma
function saludar({name , age}: {name: string, age: number}){
    
    console.log(`Hola ${name} tienes ${age} años`);
  }

  saludar({name: "Juan", age: 30});

 */

 // ✅ esta es otra forma

/*   function saludar(persona: {name: string, age: number}){
    const {name, age} = persona; // o persona.name y persona.age
        
    console.log(`Hola ${persona.name} tienes ${persona.age} años`); 
  }

  saludar({name: "Santino", age: 19}); 

*/

  // ✅ esta es otra forma


/* function saludar({name , age}: {name: string, age: number}): number { // number indica que devuelve 
    
  console.log(`Hola ${name} tienes ${age} años`);
  return age // devuelve el number.
} */


// ✅ esta es otra forma - FUNCION COMO PARAMETRO - En js las funciones se la llaman de primera clase (first class sityzens) lo que quiere decir que se pueden pasar de distintas formas variables, parametros, callbacks, etc.

                    	    // :Function es el any de las funciones, no recomendable.
/* const sayFromFunction = (fn) => {
  return fn('santino')
}

 // esta funcion es la de fn y el name es el parametro que recibe.
sayFromFunction((name) => { 
  console.log(`Hola ${name}`);
})

sayFromFunction(() => {
  return Math.random();
}) */

// esto esta lleno de any, y errores. Es decir no es lo correcto, solo es para mostrar que se puede hacer.




  // ✅ esta es otra forma - TIPAR ARROW FUNCTIONS =>

  // esta me gusta más
/*   const sumar = (a: number, b: number): number => {
    return a + b;
  }

  // esta es otra forma pero me cuesta mas leerlo
  const restar: (a: number, b: number) => number = (a, b) => {
    return a - b;
  }
 */

  // never -- funciones q no devuelven nada
/* 
  function throwError(message: string): never {
    if(message) throw new Error(message); //ej 1 
    throw new Error(message);
    process.exit(1); //ej 2
  }
   */




// never y void no son lo mismo.

/* 
function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message); // ❌ --> es un never nunca llega al return implicito --> haces el throw y  no dejas que termine la ejecución de la función. never --> nunca llega al final de la función. void --> no devuelve nada pero llega al final.

  // return implicito <------ TE DA IGUAL --> void --> no devuelve nada


} */



// inferencia funciones anonimas segun el contexto
/* 
const avengers = ['Thor', 'Ironman', 'Spiderman'];

// inferencia --> sabe que es un string porque el array es de strings e interpreta eso.
avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase());
}) */


// objetos

// 📌 Type Alias

// Pascalcase
// type Hero = {
//   name: string,
//   age: number,
// }


// let hero: Hero = {
//   name: 'Thor',
//   age: 30,
// }

// // hero.power = 'Mjolnir'; // ❌ no se puede agregar una propiedad que no esta definida en el objeto.


// function createHero(hero: Hero): Hero{
//   const {name, age} = hero;
//   return {
//     name,
//     age,
//   }
// }

// const ironman = createHero({name: 'Ironman',age: 40});



// 📌 Optional properties  // VALIDACIÓNES QUE NO ESTAN EN LA EJECUCIÓN

// Pascalcase
// Template Union Types
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;





type Hero = {
  readonly id?: HeroId, // readonly --> no se puede modificar, solo de lectura. ✅ evitando mutabilidad. 
  name: string,
  age: number,
  isactive?: boolean, // ? --> es opcional
}


let hero: Hero = {
  name: 'Thor',
  age: 30,
}

// hero.power = 'Mjolnir'; // ❌ no se puede agregar una propiedad que no esta definida en el objeto.


function createHero(hero: Hero): Hero{
  const {name, age} = hero;
  return {
    // id: '1234', // ❌ no sigue el formato de HeroId. 
    id: crypto.randomUUID(), // ✅
    name,
    age,
    isactive: true
  }
}

const thor = Object.freeze(createHero({name: 'thor',age: 30})); // Object.freeze --> evita que se pueda modificar el objeto, que sea inmutable... ✅ evitando mutabilidad.
console.log(thor.isactive); // --> true

// thor.id = 4234423432423324324; // ❌ no se puede modificar porque es readonly.
 */

// 📌 Template union Types

/* type HexadecimalColor = `#${string}` 


const color: HexadecimalColor = '0033ff' // hexadecimales --> ❌ ya que te informa que el formato contiene # evitando errores. 
const color2 = '#0033ff' // hexadecimales  --> ✅ ya que respeta el formato. */


// 📌 UNION TYPES

/* 

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'global' | 'cosmic' | 'universal' | 'multiversal';

// const enableAnimationDuration: number | boolean = 200; // 200ms 



    // let ejemplo: number | string | 3 | 'santino' // ✅
    // ejemplo = 4; // ✅

type Hero = {
  readonly id?: HeroId, // readonly --> no se puede modificar, solo de lectura. ✅ evitando mutabilidad. 
  name: string,
  age: number,
  isactive?: boolean, // ? --> es opcional
  powerScale?: HeroPowerScale | undefined;
}

let hero: Hero = {
  name: 'Thor',
  age: 30,
}
// hero.power = 'Mjolnir'; // ❌ no se puede agregar una propiedad que no esta definida en el objeto.
function createHero(hero: Hero): Hero{
  const {name, age} = hero;
  return {
    // id: '1234', // ❌ no sigue el formato de HeroId. 
    id: crypto.randomUUID(), // ✅
    name,
    age,
    isactive: true,
  }
}

const thor = createHero({name: 'thor',age: 30}); 

thor.powerScale = 'cosmic'
console.log(thor);
  */


// 📌 Intersection Types. 


/* 
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'global' | 'cosmic' | 'universal' | 'multiversal';

type HeroBasicInfo = { 
  name: string,
  age: number,
}



type HeroProporties = {
  readonly id?: HeroId, 
  isactive?: boolean, 
  powerScale?: HeroPowerScale | undefined;
}


// nuevo tipo que tiene que tener estos 2.
type Hero = HeroBasicInfo & HeroProporties;




let hero: Hero = {
  name: 'Thor',
  age: 30,
}
function createHero(input: Hero): Hero{
  const {name, age} = input;
  return {

    id: crypto.randomUUID(), // ✅
    name,
    age,
    isactive: true,
  }
}

const thor = createHero({name: 'thor',age: 30}); 

thor.powerScale = 'cosmic'
console.log(thor);

 */


// 📌 Type index
/* 
type HeroProporties = { 
  isActive: boolean;
  address: {
    planet: string,
    city: string
  }
}

// accedemos a adress, reutilizar partes de algun tipo que tengamos 
const adressHero: HeroProporties['address'] = {
  planet: 'Earth',
  city: 'Buenos Aires'
}

 */
 
//Type from value

/* const address =  {
  planet: 'Earth',
  city: 'Buenos Aires'
}

type Address = typeof address // mismo objeto ⬇️

const addressTwitch: Address = { 
  planet: 'mars', 
  city: 'twitch'
} */

// Type from function return 

/* function createAdress() {
  return   {
    planet: 'Earth',
    city: 'Buenos Aires'
  }
}

 // recuperamos type y guardamos en Adress
type Adress = ReturnType<typeof createAdress>  */

// 🌐 Type from function return 
/* 
function createAdress() {
  return   {
    planet: 'Earth',
    city: 'Buenos Aires'
  }
}
 // extraer tipos de cualquier funcion 

type Address = ReturnType<typeof createAdress> // ReturnType --> recuperame el tipo que tiene la funcion createAdress y guardalo en Adress.

 */


// 📌 Arrays
// const languajes: Array<string>= []
// ✅ me parece mas simple usar este... ⬇️
// const languajes: string[] = []

                // entre parentesis si queres 2
/* const languajes:(number | string)[] = []

languajes.push('JavaScript')
languajes.push(1)

console.log(languajes);

 */



// ARRAY INFO SAVE
/* 
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'global' | 'cosmic' | 'universal' | 'multiversal';


type HeroBasicInfo = {

  name: string,
  age: number,

}

const herosWithBasicInfo: HeroBasicInfo[]= []; */


// ✅📌 MATRICES Y TUPLAS

/*

['X', 'O', 'X'], // <-- string[]
['O', 'X', 'O'], // <-- string[]
['O', 'O', 'X'], // <-- string[]
 
*/

// 
type CellValue = 'X' | 'O' | '';
// tupla --> array con limite fijado de longitud.
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'], 
  ['O', 'X', 'O'], 
  ['O', 'O', 'X'],
]



// esto es una tupla de react, siempre devuelve 2 funciones 
//EJEMPLO DE TUPLA ⬇️
/* type State = [string, (newName:string) => void]
const [hero, setHero]:State = useState('thor')
 */

//EJEMPLO 2 DE TUPLA ⬇️
/* 
type RGB = [number, number, number]

const rgb: RGB= [255, 255, 0] // 0 - 255

const rgb2: RGB = [1, 2, 3, 4, 'f'] //❌ esta mal ya que no utiliza el type que predifinimos para el RGB [number, number, number] 

*/

