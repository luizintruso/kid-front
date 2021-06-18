import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uf } from '../classes/uf';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor(private http: HttpClient) {
    
  }

  public salvar(uf : Uf): Observable<Uf> {
    return this.http.post <Uf> ('/corp/ufs', uf);
  }
  
  public pesquisar(): Observable<Uf[]> {
    return this.http.get <Uf[]> ('/corp/ufs');
  }

  public excluir(id:Number): Observable<void> {
    return this.http.delete<void> ('/corp/ufs/'+id);
  }
}
