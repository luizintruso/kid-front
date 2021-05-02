import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../classes/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  public pesquisar(): Observable<Pessoa[]> {
    return this.http.get <Pessoa[]> ('/corp/pessoas');
  }

}
