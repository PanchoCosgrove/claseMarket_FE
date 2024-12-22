import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private Http : HttpClient) { }

  registrar(cliente : Cliente):Observable<any>{
    let url = "http://localhost:8080/registrar";
    return this.Http.post(url, cliente);
  }
}
