import { Injectable } from '@angular/core';

@Injectable({         //@decorador
  providedIn: 'root' // de acceso global
})
export class GifsService {

  private _historial:string[]=[];


  get historial(){

    return [...this._historial]; //... operador sprea d
  }

  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial=this._historial.splice(0,10);
      }
    
    
    console.log(this._historial);
  }
}
