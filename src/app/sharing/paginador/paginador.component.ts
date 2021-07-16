import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTable } from '../domain/data-table';
import { Pageable } from '../domain/pageable';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() 
  dataSource: DataTable<any>;
  pages:Number[]=[];
  constructor() { }

  ngOnInit(): void {
    if(this.dataSource){
      for(let i = 1; i<=this.dataSource.totalPages; i++){
        this.pages.push(i);
      }
    }

  }

}
