import { Component, Input, Output, EventEmitter } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: personaje = {
    nombre: "",
    poder: 0
  }

  constructor(private dbzservice: dbzservice){

  }
  //@Output() onNuevoPersonaje: EventEmitter <personaje> = new EventEmitter();
  //funcion
  agregar(){
    if(this.nuevo.nombre.trim().length === 0)
    {
      return;
    }
    console.log(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzservice.agregarpersonaje(this.nuevo)
    this.nuevo ={
        nombre: "",
        poder: 0
      }
    

  }
}
