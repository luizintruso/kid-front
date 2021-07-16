import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/sharing/services/abstract-service';
import { RestApiService } from 'src/app/sharing/services/rest-api-service';
import { Categoria } from '../domain/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends AbstractService<Categoria>{

  constructor(rest: RestApiService) { 
    super(rest,'/corp/categorias')
  }
}
