import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Uf } from '../classes/uf';

import { UfService } from '../services/uf.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-manter-uf',
  templateUrl: './manter-uf.component.html',
  styleUrls: ['./manter-uf.component.css']
})
export class ManterUFComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(private service:UfService) { }

  public formulario: FormGroup;
  public ufs:Uf[] = [];

  ngOnInit(uf?:Uf): void {
    this.service.pesquisar().subscribe(e=>{
      this.ufs = e;
    })
    
    this.formulario = new FormGroup({
      id: new FormControl(uf?.id),
      nome: new FormControl(uf?.nome),
      sigla: new FormControl(uf?.sigla),
    });
  }

  salvar():void{
    this.formulario.value;
    this.service.salvar(this.formulario.value).subscribe(e=>{
      this.ngOnInit();
    });
  }

  editar(uf: Uf):void{
    this.ngOnInit(uf);
  }

  excluir(uf:Uf):void{
    this.service.excluir(uf.id).subscribe(e=>{
      this.ngOnInit();
    });
  }

}
