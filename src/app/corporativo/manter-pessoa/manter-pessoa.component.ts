import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Endereco } from '../classes/endereco';
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

  dataSource = ELEMENT_DATA;

  constructor(private service:PessoaService, private route: ActivatedRoute) {}

  public formularioPessoa: FormGroup;
  public formularioPessoaFisica:FormGroup = new FormGroup({});
  public formularioPessoaJuridica:FormGroup = new FormGroup({});
  public formularioEnderecoPessoa:FormGroup = new FormGroup({});

  public pessoas:[] = [];
  public codTipoPessoa:Number=1;
  

  ngOnInit(pessoa?:Pessoa): void {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get('id'));

      if(id){
        this.service.obter(id).subscribe(e=>{
          console.log(e);
          this.criarFormPessoa(e);
          this.criarFormPessoaFisica(e as Pessoafisica);
        });
      }

      this.criarFormPessoa(new Pessoa());
      this.criarFormPessoaFisica(new Pessoafisica());
  }

  criarFormPessoa(pessoa: Pessoa) {
    this.formularioPessoa = new FormGroup({
      codTipoPessoa: new FormControl(pessoa ? pessoa?.codTipoPessoa : 1),
      nome: new FormControl(pessoa?.nome),
      email: new FormControl(pessoa?.email),
      numCpfCnpj: new FormControl(pessoa?.numCpfCnpj),
      dddTelefone: new FormControl(pessoa?.dddTelefone),
      telefone: new FormControl(pessoa?.telefone),
      dddCelular: new FormControl(pessoa?.dddCelular),
      celular: new FormControl(pessoa?.celular)
    });
  }

  criarFormPessoaFisica(pessoaFisica: Pessoafisica) {
    this.formularioPessoaFisica = new FormGroup({
      codTipoPessoa: new FormControl(pessoaFisica.nomeMae),
      nome: new FormControl(pessoaFisica?.nomePai),
    });
  }

  criarFormEndereco(endereco: Endereco) {
    this.formularioEnderecoPessoa = new FormGroup({
      bairro: new FormControl(endereco.bairro),
      cep: new FormControl(endereco?.cep),
    });
  }

  salvar():void{
    let pessoa:Pessoa;
     if(this.codTipoPessoa==1){
      pessoa = {...this.formularioPessoa.value,...this.formularioPessoaFisica.value};
    }else{
      pessoa = {...this.formularioPessoa.value,...this.formularioPessoaJuridica.value};
    }
    pessoa.endereco = this.formularioEnderecoPessoa.value;

    this.service.salvar(pessoa).subscribe(e=>{
      this.ngOnInit();
    });
  }

  changePessoa(e):void{
    console.log(e);
    this.codTipoPessoa = this.formularioPessoa.controls.codTipoPessoa.value;
  }
 

}
