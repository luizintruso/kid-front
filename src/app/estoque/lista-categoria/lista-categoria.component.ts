import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTable } from 'src/app/sharing/domain/data-table';
import { Pageable } from 'src/app/sharing/domain/pageable';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../service/categoria.service';
import {  map } from 'rxjs/operators';
@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  dataSource$: Observable<DataTable<Categoria>>;
  pageable: Observable<Pageable>;
  constructor(private service:CategoriaService) { }

  ngOnInit(): void {
    this.dataSource$ = this.service.
            findByEntityPageAble(new Categoria(),new Pageable());
    
    
  }

}
