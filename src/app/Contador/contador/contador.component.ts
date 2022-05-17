import { Component } from '@angular/core';


@Component({
    selector: "app-contador",
     template: `
     <h1>{{titulo}}</h1>

      <h3>La base es: <strong> {{base}}</strong></h3>
      <button (click)= "acumular()">incrementar +5</button>
      <span>{{numero}}</span>
      <button (click)= "acumular2()">decrementar -5</button>
     `
     

})  

export class laclase {
    titulo: String = 'contador AP';
    numero: number = 10;
    base  : number = 5;
    
    acumular(){
      this.numero += 2;
      this.base += 5;
    }
    acumular2(){
        this.numero -=2
        this.base -=5
    }
}