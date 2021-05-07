import { Pessoa } from "./pessoa";
import { Tipoendereco } from "./tipoendereco";
import { Uf } from "./uf";

export class Endereco {

    public id:Number;
    public codTipoEndereco:Number;
    public idUf:Number;
    public idPessoa:Number;
    
    public cep:Number;
    public cidade:String;
    public bairro:String;
    public descEndereco:String;
    public numero:number;
    public descComplemento:String;
    public dataHoraInicio:Date;

}
