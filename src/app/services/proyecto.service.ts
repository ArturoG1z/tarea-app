import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyecto } from '../models/proyecto.model';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  public url: string;
  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  } 

  testService() {
    return 'Probando el servicio de Angular';
  }
  
  saveProyecto(proyecto: Proyecto): Observable<any> {
    let params = JSON.stringify(proyecto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'proyecto/save', params, {headers: headers});
  }
  
  getProyectos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'proyectos', {headers: headers});
  }

  getProyecto(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'proyecto/' + id, {headers: headers});
  }

  updateProyecto(proyecto: Proyecto): Observable<any> {
    let params = JSON.stringify(proyecto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.patch(this.url + 'proyecto/' + proyecto._id, params, {headers: headers});
  }
}
