



/* class Avenger {
    readonly name: string
    private powerScore: number
    private readonly wonBattles: number = 0 
    protected age: number = 0
    //public si no ponemos nada





    constructor(name: string, PowerScore:number){
        this.name = name
        this.powerScore = PowerScore
    }
    get fulName(){
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number){
        if(newPower<= 100){
            this.power = newPower
        }else{
            throw new Error('Power score cannot be more than 100')
        }


    }
}


const avengers = new Avenger('spiderman', 80)

 */


/* interface Avenger {
    name: string
    powerScore: number
    wonBattles: number 
    age: number 
    battle: (enemy: Avenger, win: boolean) => void
} 
    
EXPORTAMOS DESDE UN ARCHIVO TYPES.D.TS PARA UN CODIGO MAS LIMPIO Y ES LO RECOMENDADO
el d.ts es una convencion en la que estamos poniendo la definicion donde tenemos el archivo con todas las 
definiciones, si lo tenemos en el mismo sitio se pone la d.ts
interfaces
types etc
*/

import {type IAvenger} from "../types.d"



// voy a crar una class que implementa la interface
class Avenger implements IAvenger{
    name: string
    powerScore: number
    wonBattles: number = 0 
    age: number = 0
    // battle: (enemy: Avenger, win: boolean) => void
    //public si no ponemos nada


    constructor(name: string, PowerScore:number){
        this.name = name
        this.powerScore = PowerScore
       
    }




    get fulName(){
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number){
        if(newPower<= 100){
            this.power = newPower
        }else{
            throw new Error('Power score cannot be more than 100')
        }


    }
}


const avengers = new Avenger('spiderman', 80)