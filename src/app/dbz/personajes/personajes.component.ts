import { Component } from '@angular/core';
import { dbzservice } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input() personajes: personaje [] = [];
get personajes(){
  return this.dbzservice.personajes;
}
  constructor(private dbzservice: dbzservice){

  }
}

