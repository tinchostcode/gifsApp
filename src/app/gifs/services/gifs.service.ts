import { Injectable } from '@angular/core';

@Injectable({         //@decorador
  providedIn: 'root' // de acceso global
})
export class GifsService {

  private _historial:string[]=[];


  get historial(){

    return [...this._historial];
  }

  buscarGifs(query:string){
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
