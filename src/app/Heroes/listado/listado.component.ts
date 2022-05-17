import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string[] = ["Spiderman", "Iron Man", "Hulk", "Thor", "Capitan America"]
 HeroeBorrado: string = "";
 BorrarHeroe(){ 
 this.HeroeBorrado = this.heroes.shift() || "";
}
}