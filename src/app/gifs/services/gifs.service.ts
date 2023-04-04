import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({         //@decorador
  providedIn: 'root' // de acceso global
})


export class GifsService {

  private apiKey:string= 'oFmwdelYBjUK4ValnUK9yNhiV51EdWNN'
  private _historial:string[]=[];

  public resultados:any[]=[];

  get historial(){

    return [...this._historial]; //... operador sprea d
  }
  
  constructor(private http:HttpClient){}

  buscarGifs(query:string) {

    query=query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial=this._historial.splice(0,10);
    }
    
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=oFmwdelYBjUK4ValnUK9yNhiV51EdWNN&q=${query}&limit=10`)
    .subscribe((resp:any) => {
    console.log(resp.data);
    this.resultados=resp.data;
    });
  }
    
}

