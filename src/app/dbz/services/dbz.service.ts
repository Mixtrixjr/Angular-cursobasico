import { Injectable } from "@angular/core";
import { personaje } from '../Interfaces/dbz.interfaces';

@Injectable()
export class dbzservice{
    private _personajes: personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 8500
        }
        ];
     
    get personajes(){
        return [...this._personajes]
    }
    constructor(){}

    agregarpersonaje(personaje: personaje){
this._personajes.push(personaje);
    }
}