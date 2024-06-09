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
