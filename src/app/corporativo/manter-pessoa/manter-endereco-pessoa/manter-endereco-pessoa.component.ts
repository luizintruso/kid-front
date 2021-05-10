import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Endereco } from '../../classes/endereco';

@Component({
  selector: 'app-manter-endereco-pessoa',
  templateUrl: './manter-endereco-pessoa.component.html',
  styleUrls: ['./manter-endereco-pessoa.component.css']
})
export class ManterEnderecoPessoaComponent implements OnInit {

  @Input()
  public formularioEnderecoPessoa: FormGroup;
  public endereco:Endereco;

  constructor() { }

  ngOnInit(endereco?:Endereco): void {
    this.formularioEnderecoPessoa.addControl('bairro', new FormControl(endereco?.bairro));
    this.formularioEnderecoPessoa.addControl('cep', new FormControl(endereco?.cep));
    this.formularioEnderecoPessoa.addControl('cidade', new FormControl(endereco?.cidade));
    this.formularioEnderecoPessoa.addControl('idUf', new FormControl(endereco?.idUf)); 
    this.formularioEnderecoPessoa.addControl('descEndereco', new FormControl(endereco?.descEndereco));
    this.formularioEnderecoPessoa.addControl('numero', new FormControl(endereco?.numero));
    this.formularioEnderecoPessoa.addControl('descComplemento', new FormControl(endereco?.descComplemento));
    this.formularioEnderecoPessoa.addControl('bairro', new FormControl(endereco?.bairro));
    //this.formularioEnderecoPessoa.addControl('codTipoEndereco', new FormControl(endereco?.codTipoEndereco));
  
  }
  

}
