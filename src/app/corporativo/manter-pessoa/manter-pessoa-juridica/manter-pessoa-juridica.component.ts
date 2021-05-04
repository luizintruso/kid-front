import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoajuridica } from '../../classes/pessoajuridica';

@Component({
  selector: 'app-manter-pessoa-juridica',
  templateUrl: './manter-pessoa-juridica.component.html',
  styleUrls: ['./manter-pessoa-juridica.component.css']
})
export class ManterPessoaJuridicaComponent implements OnInit {

  @Input()
  public formularioPessoaJuridica: FormGroup;
  public pessoaJuridica:Pessoajuridica;

  constructor() { }

  ngOnInit(pessoaJuridica?:Pessoajuridica): void {
    this.formularioPessoaJuridica.addControl('nomeContratoSocial', new FormControl(pessoaJuridica?.nomeContratoSocial));
    this.formularioPessoaJuridica.addControl('nomeFantasia', new FormControl(pessoaJuridica?.nomeFantasia));
  
  }

}
