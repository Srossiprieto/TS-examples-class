interface Mario {
    nombre: string,
    saltar: () => void
}


interface Sonic{
    nombre: string,
    correr: () => void,
}

type Personaje = Mario | Sonic;

// type guard
// dejame comprobar si personaje es sonic. 
// y esta función determian si es sonic o no. 
// siempre que se pueda evitarlo. pero en algunos casos estan bien.
function checkIsSonic(personaje: Personaje): personaje is Sonic{
    return (personaje as Sonic).correr != undefined;
}


function jugar(personaje: Personaje) {
    if(checkIsSonic(personaje)){
        personaje.correr(); 
    
    }

}
