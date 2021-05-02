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

  constructor() { }

  ngOnInit(pessoafisica?:Pessoafisica): void {
    this.formularioPessoaFisica.addControl('idade', new FormControl(pessoafisica?.idade));
    this.formularioPessoaFisica.addControl('dataNascimento', new FormControl(pessoafisica?.dataNascimento));
  
  }

}
