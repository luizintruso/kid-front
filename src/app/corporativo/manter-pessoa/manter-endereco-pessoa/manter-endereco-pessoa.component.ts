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
  public formularioEndereco: FormGroup;
  public endereco:Endereco;

  constructor() { }

  ngOnInit(endereco?:Endereco): void {
    this.formularioEndereco.addControl('bairro', new FormControl(endereco?.bairro));
    this.formularioEndereco.addControl('cep', new FormControl(endereco?.cep));
  
  }

}
