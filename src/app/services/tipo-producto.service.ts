import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { TipoProductoI } from '../models/TipoProductoI'; 

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/tipoproducto`
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<TipoProductoI[]>{
    return this.http.get<TipoProductoI[]>(this.base_path)
  }
  create(data: TipoProductoI): Observable<TipoProductoI>{
    return this.http.post<TipoProductoI>(this.base_path, data)
  } 
}
