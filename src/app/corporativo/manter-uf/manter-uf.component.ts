import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Uf } from '../classes/uf';

import { UfService } from '../services/uf.service';


@Component({
  selector: 'app-manter-uf',
  templateUrl: './manter-uf.component.html',
  styleUrls: ['./manter-uf.component.css']
})
export class ManterUFComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'editar', 'excluir'];
 
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
