import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {

@ViewChild ('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; // !no null assertion operator

constructor(private gifsService:GifsService){}  

  buscar() {

    const valor= this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
    
    
  }

  //Aca uso el service, y se importa arriba , tengo accesso a las prop y met
 
}
 