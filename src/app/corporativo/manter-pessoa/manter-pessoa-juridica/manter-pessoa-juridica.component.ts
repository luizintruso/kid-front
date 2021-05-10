import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pessoajuridica } from '../../classes/pessoajuridica';

@Component({
  selector: 'app-manter-pessoa-juridica',
  templateUrl: './manter-pessoa-juridica.component.html',
  styleUrls: ['./manter-pessoa-juridica.component.css']
})
export class ManterPessoaJuridicaComponent implements OnInit {
  @Input() events: Observable<void>;

  @Input()
  public formularioPessoaJuridica: FormGroup;
  public pessoaJuridica:Pessoajuridica;

  constructor() { }

  ngOnInit(pessoaJuridica?:Pessoajuridica): void {
    if(this.events != null){
      //this. = this.events.subscribe(() => console.log('ok'));
    }
    this.formularioPessoaJuridica.addControl('nomeFantasia', new FormControl(pessoaJuridica?.nomeFantasia));
    this.formularioPessoaJuridica.addControl('numInscricaoEstadual', new FormControl(pessoaJuridica?.numInscricaoEstadual));
    this.formularioPessoaJuridica.addControl('valorCapitalSocial', new FormControl(pessoaJuridica?.valorCapitalSocial));
    this.formularioPessoaJuridica.addControl('numInscricaoMunicipal', new FormControl(pessoaJuridica?.numInscricaoMunicipal));
    this.formularioPessoaJuridica.addControl('contratoSocial', new FormControl(pessoaJuridica?.contratoSocial));
    this.formularioPessoaJuridica.addControl('numRegistroJuntaComercial', new FormControl(pessoaJuridica?.numRegistroJuntaComercial));
    this.formularioPessoaJuridica.addControl('dataRegistroJuntaComercial', new FormControl(pessoaJuridica?.dataRegistroJuntaComercial));
    this.formularioPessoaJuridica.addControl('numUltimaAlteracaoContratoSocial', new FormControl(pessoaJuridica?.numUltimaAlteracaoContratoSocial));
    this.formularioPessoaJuridica.addControl('dataUltimaAlteracaoContratoSocial', new FormControl(pessoaJuridica?.dataUltimaAlteracaoContratoSocial));
    this.formularioPessoaJuridica.addControl('numRegistroRepresentacao', new FormControl(pessoaJuridica?.numRegistroRepresentacao));
    this.formularioPessoaJuridica.addControl('dataRegistroRepresentacao', new FormControl(pessoaJuridica?.dataRegistroRepresentacao));
    this.formularioPessoaJuridica.addControl('codNacionalidade', new FormControl(pessoaJuridica?.codNacionalidade));
    //this.formularioPessoaJuridica.addControl('', new FormControl(pessoaJuridica?.bolMei));
 
  }

}
