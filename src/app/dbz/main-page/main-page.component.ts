
import { Component, Input } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

//arreglo con interface

nuevo:personaje = {
  nombre: 'Yamcha',
  poder: 0
}

constructor(){
}
}
