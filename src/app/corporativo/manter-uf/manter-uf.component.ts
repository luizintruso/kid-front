import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manter-uf',
  templateUrl: './manter-uf.component.html',
  styleUrls: ['./manter-uf.component.css']
})
export class ManterUFComponent implements OnInit {

  constructor() { }

  public formulario: FormGroup;

  ngOnInit(): void {
    console.log('LOG manter uf');
    
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      sigla: new FormControl(''),
    });
  }

  salvar():void{
    console.log(this.formulario.value);
  }

}
