import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Heroesmodule } from './Heroes/Heroes.module';
import { ContadorModule } from './Contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Heroesmodule,
    ContadorModule,
    DbzModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
