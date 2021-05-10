import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../classes/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'numCpfCnpj', 'editar', 'excluir'];
  pessoas:Pessoa[] = [];

  constructor(private service:PessoaService) { }

  ngOnInit(): void {
    this.service.pesquisar().subscribe(e=>{
      this.pessoas = e; 
    })
  }

  deletar(pessoa:Pessoa):void{
    this.service.deletar(pessoa.id).subscribe(e=>{
      this.ngOnInit();
    });
  }

  editar(pessoa: Pessoa):void{
    console.log(pessoa);
  }

}
