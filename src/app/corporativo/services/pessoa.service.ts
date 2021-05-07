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

  public salvar(pessoa : Pessoa): Observable<Pessoa> {
    return this.http.post <Pessoa> ('/corp/pessoas', pessoa);
  }
  
  public excluir(id:Number): Observable<void> {
    return this.http.delete<void> ('/corp/pessoas/'+id);
  }

  public obter(id:Number): Observable<Pessoa> {
    return this.http.get <Pessoa> ('/corp/pessoas/'+id);
  }

}
