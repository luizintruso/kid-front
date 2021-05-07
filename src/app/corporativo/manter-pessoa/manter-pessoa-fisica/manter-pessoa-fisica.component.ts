import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoafisica } from '../../classes/pessoafisica';

@Component({
  selector: 'app-manter-pessoa-fisica',
  templateUrl: './manter-pessoa-fisica.component.html',
  styleUrls: ['./manter-pessoa-fisica.component.css']
})
export class ManterPessoaFisicaComponent implements OnInit {

  @Input()
  public formularioPessoaFisica: FormGroup;
  public pessoaFisica:Pessoafisica;
  public codTipoSexo:Number=1

  constructor() { }

  ngOnInit(pessoafisica?:Pessoafisica): void {
    this.formularioPessoaFisica.addControl('nomePai', new FormControl(pessoafisica?.nomePai));
    this.formularioPessoaFisica.addControl('nomeMae', new FormControl(pessoafisica?.nomeMae));
    this.formularioPessoaFisica.addControl('nacionalidade', new FormControl(pessoafisica?.nacionalidade));
    this.formularioPessoaFisica.addControl('naturalidade', new FormControl(pessoafisica?.naturalidade));
    this.formularioPessoaFisica.addControl('rg', new FormControl(pessoafisica?.rg));
    //this.formularioPessoaFisica.addControl('rgUf', new FormControl(pessoafisica?.rgUf));
    this.formularioPessoaFisica.addControl('rgOrgaoEmissor', new FormControl(pessoafisica?.rgOrgaoEmissor));
    this.formularioPessoaFisica.addControl('dataNascimento', new FormControl(pessoafisica?.dataNascimento));
    //this.formularioPessoaFisica.addControl('codEstadoCivil', new FormControl(pessoafisica?.codEstadoCivil));
    this.formularioPessoaFisica.addControl('codTipoSexo', new FormControl(pessoafisica?.codTipoSexo));
  }

  changeSexo(e) {
    this.codTipoSexo = this.formularioPessoaFisica.controls.codTipoSexo.value;
  }

}
