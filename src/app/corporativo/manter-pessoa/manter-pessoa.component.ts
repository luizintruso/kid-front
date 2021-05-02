import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../classes/pessoa';
import { Pessoafisica } from '../classes/pessoafisica';
import { PessoaService } from '../services/pessoa.service';

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
  selector: 'app-manter-pessoa',
  templateUrl: './manter-pessoa.component.html',
  styleUrls: ['./manter-pessoa.component.css']
})
export class ManterPessoaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'numCpfCnpj', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(private service:PessoaService) { }

  public formularioPessoa: FormGroup;
  public pessoas:Pessoa[] = [];
  public codTipoPessoa:Number;
  public formularioPessoaFisica:FormGroup = new FormGroup({});

  ngOnInit(pessoa?:Pessoa): void {
    this.service.pesquisar().subscribe(e=>{
      this.pessoas = e;
    })
    
    this.formularioPessoa = new FormGroup({
      id: new FormControl(pessoa?.id),
      nome: new FormControl(pessoa?.nome),
      email: new FormControl(pessoa?.email),
      numCpfCnpj: new FormControl(pessoa?.numCpfCnpj),
      codTipoPessoa: new FormControl(pessoa?.codTipoPessoa)
    });
  }

  salvar():void{
    let pessoa:Pessoa;
    if(this.codTipoPessoa==1){
      pessoa = {...this.formularioPessoa.value,...this.formularioPessoaFisica.value};
    }else{
    
    }
    console.log(pessoa);
    this.service.salvar(pessoa).subscribe(e=>{
      this.ngOnInit();
    });
  }
  editar(pessoa: Pessoa):void{
    this.ngOnInit(pessoa);
  }

  excluir(pessoa:Pessoa):void{
    this.service.excluir(pessoa.id).subscribe(e=>{
      this.ngOnInit();
    });
  }

  changePessoa(e):void{
    console.log(e);
    this.codTipoPessoa = this.formularioPessoa.controls.codTipoPessoa.value;
  }

}
