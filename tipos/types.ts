// inferencia 
// como a y b son de tipo number, c también será de tipo number
const a = 1;
const b = 2;
const c = a + b;

let cadenadetexto = "Hola";

cadenadetexto.toLocaleLowerCase();

// ❌ cadenadetexto = 2;
// ❌ cadenadetexto.propiedadNoExiste;


let number: number = 2;
let string: string = "Hola";
let boolean: boolean = true;
let arrayNumber: number[] = [1, 2, 3];

// any es un tipo que puede ser cualquier cosa y no tiene restricciones de tipo en tiempo de compilación.
// es que IGNORE el tipado de typescript.
let obj: any = {x: 0};

// obj.foo();
// obj();
obj.bar = 100;
obj = "Hola";
const n: number = obj;
